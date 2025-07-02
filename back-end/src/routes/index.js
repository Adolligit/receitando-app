const express = require('express');
const user = require('./user.routes.js');

const route = express();

route.use("/user", user);

module.exports = route;