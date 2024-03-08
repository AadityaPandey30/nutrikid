const express = require("express");
const authController = require("../controllers/authController");
const dietController = require("../controllers/dietController");

const router = express.Router();

router.use(authController.protect);

router.route("/diets/:issueId").get(dietController.getDiets); //in the issueId pass name of the issue
//we're only convering fever and loose motions for now, so only routes available are fever, loosemotion

module.exports = router;
