import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from '../app';
import logger from '../logger';

dotenv.config();

// Get the hostname and port to listen on
const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || 1200;

const connectionUrl = process.env.NODE_ENV === 'test'
  ? process.env.DB_URL_TEST : process.env.DB_URL;

// connect to mongodb database
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}, () => {
  logger.info('Connected to database successfully');
});

app.listen(port, () => {
  logger.info(`API is listening on ${hostname}:${port}`);
});

process.on('SIGINT', () => {
  mongoose.connection.close(); // properly close db connection
  logger.info('Shutting down server...');
  logger.info('Server successfully shutdown');
  process.exit(0);
});
