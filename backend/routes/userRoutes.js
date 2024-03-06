const express = require("express");
// const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const blogsController = require("../controllers/blogsController");

const router = express.Router();


router.get('/', blogsController.getAllBlogPosts);
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/blog").post(blogsController.createBlogPost);


module.exports = router;