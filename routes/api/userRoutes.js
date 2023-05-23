const router = require('express').Router();
const { createUser, getUsers, getSingleUser, updateUser, removeUser } = require('../../controllers');

router
    .route('/')
    .get(getUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(removeUser)


module.exports = router;

