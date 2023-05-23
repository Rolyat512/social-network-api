const router = require('express').Router();

const { createUser, getUsers, getSingleUser, updateUser, removeUser } = require('./userController');

module.exports = { createUser, getUsers, getSingleUser, updateUser, removeUser };