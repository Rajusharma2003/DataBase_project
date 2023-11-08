
const express = require('express')

// import controllers for routing.
const {home, registerUser , loginUser} = require("../controllers/usercontrollers.js")


// create a router using express this is the fuctionality of the express.

const router = express.Router();

router.get('/' , home)
router.post('/registeruser' , registerUser)
router.post('/loginuser' , loginUser)


module.exports = router