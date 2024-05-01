const express = require('express')
const { handleUserLogin, handleUserSignUp } = require('../controller/user')

const routes = express.Router();

routes.post('/signup', handleUserSignUp);
routes.post('/login', handleUserLogin);

module.exports = routes
