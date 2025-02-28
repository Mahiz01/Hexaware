const express = require("express");
const { userLogin, userSignup } = require("../controller/userController");
const { body } = require("express-validator");
const router = express.Router();


router.post("/login",userLogin);
router.post("/signup",[body('username').not().isEmpty(),body('password').isLength({min:3,max:9})],userSignup);

module.exports= router;