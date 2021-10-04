const express = require('express');
const app = express.Router();
const {getUsers,pushUsers} = require('../components/users.controllers.js');

app.route('/')
.get(getUsers)
.post(pushUsers)

module.exports = app;