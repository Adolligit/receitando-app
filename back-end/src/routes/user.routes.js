const express = require('express');
const userController = require('../controller/user.controller.js');

const user = express();

user.get("/", userController.all);

module.exports = user;