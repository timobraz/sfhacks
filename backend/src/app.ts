/**
 * Configuration for Express server.
 * @module
 */

import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv-flow';
import { connect } from './utils/conn';
import ngrok from '@ngrok/ngrok';
import User from './models/user';
import Post from './models/post';
import axios from 'axios';
import fs from 'fs';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
// load env
dotenv.config();

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

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
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
  Post.create({
    user_id: '66118ed04fdd4c566623c601',
    image: 'https://sfhacks-cleanasf.s3.amazonaws.com/' + key,
    trashPoints: resp?.data.points,
    time: new Date(),
    location: [37.72649272510185, -122.48261983008864],
  });
  console.log(resp?.data);
  res.json(resp?.data);
});

app.get('/posts', async (req, res) => {
  const posts = await Post.find().populate('user_id');

  res.json(posts);
});
// Enable custom routes

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
