/**
 * Configuration for Express server.
 * @module
 */

import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv-flow';
import connect from './utils/conn';
import { Db } from 'mongodb';
// load env
dotenv.config();

// Custom Routes

const app = express();

/**
 * Configure Express.js Middleware
 */

app.use(express.json());
app.use(logger('dev'));
app.use(function (req, res, next) {
  res.header('x-powered-by', 'serverless-express');
  if (req.headers['x-forwarded-host']) {
    req.headers.host = req.headers['x-forwarded-host'] as string;
  }
  next();
});

/**
 * Routes - Public
 */

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
connect()
  .then((db) =>
    app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    }),
  )
  .catch(console.error);
