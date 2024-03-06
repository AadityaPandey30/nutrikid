const express = require("express");
const authController = require("../controllers/authController");
const chatbotController = require("../controllers/chatbotController");
const chatController = require("../controllers/chatController");

const router = express.Router();

router.use(authController.protect);

router.route("/getResponse").get(chatbotController.generateAI);

router
  .route("/community")
  .get(chatController.getAllQuestions)
  .post(chatController.postQuestion);

router.route("/community/:questionId").post(chatController.postComment);

module.exports = router;
