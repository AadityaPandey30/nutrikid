const express = require("express");
const authController = require("../controllers/authController");
const customizeController = require("../controllers/customizeController");

const router = express.Router();

router.use(authController.protect);

router.route("/customize/")
  .post(customizeController.generateRecipe); // Change from .get() to .post()

router.route("/showSimilarIngredients")
  .post(customizeController.getIngredients); // Change from .get() to .post()

module.exports = router;
