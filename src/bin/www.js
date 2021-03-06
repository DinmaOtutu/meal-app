import dotenv from 'dotenv';
import app from '../app';
import logger from '../logger';

dotenv.config();

// Get the hostname and port to listen on
const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || 8080;

app.listen(port, () => {
  logger.info(`API is listening on ${hostname}:${port}`);
});

process.on('SIGINT', () => {
  logger.info('Shutting down server...');
  logger.info('Server successfully shutdown');
  process.exit(0);
});
