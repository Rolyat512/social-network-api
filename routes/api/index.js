const router = require('express').Router();

router.use("/users", require("./userRoutes"));
// router.use("/thought", require("./thoughtRoutes"));

module.exports = router; 

