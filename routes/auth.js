const express = require('express');
const route = express.Router();

// @route     GET api/auth
// @desc      Get the logged in user
// @access    Private
route.get('/', (req, res) => {
  res.send('Get logged in');
});

// @route     POST api/auth
// @desc      Auth user and get token
// @access    Public
route.post('/', (req, res) => {
  res.send('log in user');
});

module.exports = route;
