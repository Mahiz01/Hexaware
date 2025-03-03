const express = require("express");
const { addAdmin, loginAdmin } = require("../controller/adminController");
const router = express.Router();
router.post("/add",addAdmin);
router.post("/login",loginAdmin);
module.exports = router;