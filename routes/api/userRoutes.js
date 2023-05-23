const router = require('express').Router();
const { createUser, getUsers, getSingleUser, updateUser, removeUser, newFriend, removeFriend } = require('../../controllers');

router
    .route('/')
    .get(getUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(removeUser)

router 
    .route('/:friendId')
    .post(newFriend)
    .delete(removeFriend)


module.exports = router;

