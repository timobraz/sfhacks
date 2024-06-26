/**
 * Configuration for Express server.
 * @module
 */

import dotenv from 'dotenv-flow';

dotenv.config();

import express from 'express';
import logger from 'morgan';
import { connect } from './utils/conn';
import ngrok from '@ngrok/ngrok';
import User from './models/user';
import Post from './models/post';
import bodyParser from 'body-parser';
import axios from 'axios';
import fs from 'fs';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Posts, PostsApiService, Users, UsersApiService } from 'neurelo-sdk';
import { ObjectId } from 'mongodb';
// load env

// Custom Routes

const app = express();

/**
 * Configure Express.js Middleware
 */
const s3Client = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});
app.use(
  bodyParser.json({
    limit: '50mb',
  }),
);
app.use(bodyParser());
app.use(express.json());

app.use(logger('dev'));
app.use(function (req, res, next) {
  res.header('x-powered-by', 'serverless-express');
  if (req.headers['x-forwarded-host']) {
    req.headers.host = req.headers['x-forwarded-host'] as string;
  }
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/user', async (req, res) => {
  const user = await UsersApiService.findUsersById('66118ed04fdd4c566623c5ef');
  console.log(user);
  res.json(user.data.data);
});

app.post('/upload', async (req, res) => {
  const resp = await axios
    .post('http://127.0.0.1:5000/image', {
      img: req.body.image,
    })
    .catch((err: any) => {
      console.log('failed', err.response.data);
    });
  const buff = fs.readFileSync('../python/output.jpg');

  const key = Date.now().toString() + '.jpg';
  const uploaded = await s3Client.send(
    new PutObjectCommand({
      Bucket: 'sfhacks-cleanasf',
      Key: key,
      Body: buff,
    }),
  );
  const offset = Math.random() * 0.00015 - 0.00005;
  const offset1 = Math.random() * 0.00015 - 0.00005;
  PostsApiService.createOnePosts({
    user_id: '66118ed04fdd4c566623c5ef',
    image: 'https://sfhacks-cleanasf.s3.amazonaws.com/' + key,
    trashPoints: resp?.data.points,
    time: new Date().toISOString(),
    description: req.body.description,
    compost: resp?.data.class1,
    recycle: resp?.data.class2,
    landfill: resp?.data.class3,
    location: [37.72649272510185 + offset, -122.48261983008864 + offset1],
    v: 0,
  });
  User.findByIdAndUpdate('66118ed04fdd4c566623c5ef', {
    $inc: {
      trashPoints: resp?.data.points,
      compost: resp?.data.class1,
      recycle: resp?.data.class3,
      landfill: resp?.data.class2,
    },
  }).exec();
  res.json({
    img: 'https://sfhacks-cleanasf.s3.amazonaws.com/' + key,
    points: resp?.data.points,
    time: new Date(),
    class1: resp?.data.class1,
    class2: resp?.data.class2,
    class3: resp?.data.class3,
  });
});
import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

app.get('/posts', async (req, res) => {
  try {
    const resp = await PostsApiService.findPosts();
    resp.data.data.reverse();
    console.log(resp.data.data);
    return res.json(resp.data.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Enable custom routes
app.get('/pun', async (req, res) => {
  const caption = req.query.caption;
  const resp = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'You are a chatbot.',
      },
      {
        role: 'user',
        content:
          'act like a caption generator for an app where you can post where you picked up trash. Add a lot of puns, be less that 100 characters. generate one. It should be comical and coming from first point of view. Here is the caption: ' +
          caption,
      },
    ],
    model: 'gpt-4',
  });
  res.json({ pun: resp.choices[0].message.content });
});

/**
 * Error Handler
 */
app.use(function (req, res) {
  console.error(req);
  res.status(500).json({ error: `Internal Serverless Error - '${req}'` });
});

//connect to mongodb from .env/ and listen on 3000
/**
 * Start Express server
 */
const port = process.env.PORT || 3000;
connect();
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
ngrok
  .connect({ addr: 3000, authtoken_from_env: true, domain: process.env.NGROK_SUBDOMAIN })
  .then((listener) => console.log(`Ingress established at: ${listener.url()}`));
