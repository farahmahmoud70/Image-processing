// Require Express to run server and routes
import express from 'express';

// Dependancies
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

// routes and logger
import routes from './routes/index';
import logger from './utilities/logger';

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

const port = 3000;

// listening
const listening = () => {
  console.log('server running');
  console.log(`server is running on port ${port}`);
};

// Setup Server
app.listen(port, listening);

// handling routes
app.use('/api', logger, routes);

// Env variables
process.env.ROOT_PATH = path.resolve(__dirname);
