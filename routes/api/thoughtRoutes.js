const router = require('express').Router();
const {createThought, updateUser} = require('../../controllers');

router
    .route('/')
    // .get(createThought)
    .post(createThought)

router 
    // .get(getSingleThought)


module.exports = router;