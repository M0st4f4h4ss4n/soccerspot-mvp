const express = require('express');
const routes = require('./src/routes');
const database = require('./src/database');
const path = require('path');
const { info, error } = require('./src/logger');

const app = express();


// Serve static files from the React app
info('Serving static files from the React app...');
app.use(express.static(path.join(__dirname, 'client/build')));
info('Static files served from the React app!', 'success');

// Use API routes
info('Using API routes...');
app.use('/', routes);
info('API routes used!', 'success');

// Serve the React app
info('Serving the React app...');
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
info('React app served!', 'success');

const port = process.env.PORT || 3000;
app.listen(port, () => info(`Server running on port ${port}...`, 'success'));
