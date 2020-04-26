import bluebird from 'bluebird';
import bodyParser from 'body-parser';
import compression from 'compression';
import dotenv from 'dotenv';
import express from 'express';
import lusca from 'lusca';
import mongoose from 'mongoose';

import logger from './utils/logger';

// Routes
import productsRouter from './routes/products';

// Initialize environment variables
dotenv.config();

// Express app
const app = express();

// Connect to MongoDB
const mongoUri = process.env.MONGODB_URI as string;

if (!mongoUri) {
  logger.error('No mongo connection string. Set MONGODB_URI environment variable');
  process.exit(1);
}

mongoose.Promise = bluebird;
mongoose.connect(mongoUri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    logger.info('Connected to MongoDB successfully');
  })
  .catch((err) => {
    logger.error(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
  });

// Express config
app.set('port', process.env.port || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));

// API routes
app.use('/api/products', productsRouter);

export default app;
