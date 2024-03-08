const express = require("express");

const authController = require("../controllers/authController");
const blogsController = require("../controllers/blogsController");
const router = express.Router();
router.use(authController.protect);
router.get('/getallblog', blogsController.getAllBlogPosts);
router.route("/blogs").post(blogsController.createBlogPost);





module.exports = router;