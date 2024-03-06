const express = require("express");

const authController = require("../controllers/authController");
const blogsController = require("../controllers/blogsController");
const router = express.Router();

router.get('/', blogsController.getAllBlogPosts);
router.route("/blog").post(blogsController.createBlogPost);
router.use(authController.protect);




module.exports = router;