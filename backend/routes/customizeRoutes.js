const express = require("express");
const authController = require("../controllers/authController");
const customizeController = require("../controllers/customizeController");

const router = express.Router();

router.use(authController.protect);

// router.route("/customize/:").post(); 

module.exports = router;
