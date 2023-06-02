const express = require('express');
const routes = require('./src/routes');
const database = require('./src/database');
const path = require('path');
const logger = require('./src/logger');

const app = express();

// Connect to the database
logger('Connecting to the database...');
database.connect();
logger('Connected to the database!', 'success');

// Serve static files from the React app
logger('Serving static files from the React app...');
app.use(express.static(path.join(__dirname, 'client/build')));
logger('Static files served from the React app!', 'success');

// Use API routes
logger('Using API routes...');
app.use('/', routes);
logger('API routes used!', 'success');

// Serve the React app
logger('Serving the React app...');
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
logger('React app served!', 'success');

const port = process.env.PORT || 5000;
app.listen(port, () => logger(`Server running on port ${port}...`, 'success'));