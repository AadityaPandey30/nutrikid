const Blog = require("../models/blogModel");
const catchAsync = require("../utils/catchAsync");
exports.createBlogPost = catchAsync(async (req, res, next) => {
    const { body, photo, title, createdAt, email } = req.body;

    const newBlogPost = await Blog.create({
        body,
        photo,
        postedby: req.user._id, // This line was updated to match the schema
        title,
        email,
        createdAt
    });

    res.status(201).json({
        status: "success",
        data: {
            blog: newBlogPost
        }
    });
});


exports.getAllBlogPosts = catchAsync(async (req, res, next) => {
    const blogPosts = await Blog.find().populate('postedby', 'user._id'); 
    
    res.status(200).json({
        status: "success",
        data: {
            blogPosts
        }
    });
});
