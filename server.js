// Import express and routes
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes.js');

// Set the port to the one specified in the .env file or 3001
const PORT = process.env.port || 3001;

// Instantiate express
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Direct the app to the routes
app.use('/', htmlRoutes);

// Direct the app to the public content
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));
