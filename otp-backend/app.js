const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./controllers/UserController');

// Create an Express application
const app = express();

// Middleware to parse JSON body in POST requests
app.use(bodyParser.json());

// Instantiate the UserController
const userController = new UserController();

// Define GET routes
app.get('/hey', (req, res) => userController.getHey(req, res));
app.get('/hello', (req, res) => userController.getHello(req, res));
app.get('/hi', (req, res) => userController.getHi(req, res));
app.get('/hai', (req, res) => userController.getHai(req, res));

// Define POST routes for verification/authentication
app.post('/verify', (req, res) => userController.verifyData(req, res));
app.post('/authenticate', (req, res) => userController.authenticate(req, res));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
