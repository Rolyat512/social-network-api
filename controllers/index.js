const router = require('express').Router();

const { createUser, getUsers, getSingleUser, updateUser, removeUser, newFriend, removeFriend } = require('./userController');

module.exports = { createUser, getUsers, getSingleUser, updateUser, removeUser, newFriend, removeFriend };