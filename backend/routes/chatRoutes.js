const express = require("express");
// const authController = require("../controllers/authController");
const chatbotController = require("../controllers/chatbotController");

const router = express.Router();

router.route("/getResponse").get(chatbotController.generateAI);

module.exports = router;
