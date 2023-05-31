const router = require('express').Router();

const { 
    createUser, 
    getUsers, 
    getSingleUser, 
    updateUser, 
    removeUser, 
    newFriend, 
    removeFriend } = require('./userController');

const { createThought } = require("./thoughtControllers");

module.exports = { 
    createUser, 
    getUsers, 
    getSingleUser, 
    updateUser, 
    removeUser, 
    newFriend, 
    removeFriend,
    createThought
};
