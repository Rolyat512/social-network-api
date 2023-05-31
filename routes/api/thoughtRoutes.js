const router = require('express').Router();

router
    .route('/')
    .get(getThoughts)
    .post()

router 
    .get(getSingleThought)


module.exports = router;