const express = require('express');
const route = express.Router();

// @route     GET api/contacts
// @desc      Get all user contacts
// @access    Private
route.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route     POST api/contacts
// @desc      Add a new contact
// @access    Private
route.post('/', (req, res) => {
  res.send('Add contact');
});

// @route     PUT api/contacts/:id
// @desc      Update contact
// @access    Private
route.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route     DELETE api/contacts/:id
// @desc      Delete contact
// @access    Private
route.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = route;
