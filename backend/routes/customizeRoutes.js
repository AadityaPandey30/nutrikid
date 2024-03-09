const express = require("express");
const authController = require("../controllers/authController");
const customizeController = require("../controllers/customizeController");

const router = express.Router();

router.use(authController.protect);

router.route("/customize/").get(customizeController.generateRecipe); 

router.route("/showSimilarIngredients").get(customizeController.getIngredients)

module.exports = router;
