/*
    This file holds the route handlers for api requests. These route handlers are meant to handle requests from the front end.
*/

const routes = require('express').Router();

const exampleController = require('../Controllers/example');

routes.use('/', (req, res, next) => {
    // All requests to /api/ will go through this route
    console.log('Got a /api request!');
    next();
})

routes.get('/example', (req, res) => {
    console.log('Got a GET request to api/example');
    // Pass the request off to the controller
    exampleController.getExample(req, res);
})


module.exports = routes;
