import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './routes';

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api', (req, res) => {
  res.json('Welcome to Meal Api');
});

//Routes
app.use('/api', routes);

// Setup a default catch-all route
app.use('*', (req, res, next) => {
  res.status(404).json({
    message: 'Page not found',
  });
  next();
});

export default app;
