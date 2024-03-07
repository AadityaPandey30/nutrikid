const Blog = require("../models/blogModel");
const catchAsync = require("../utils/catchAsync");

exports.createBlogPost = catchAsync(async (req, res, next) => {

   

    const newBlogPost = await Blog.create({
        body: req.body.body,
        photo: req.body.photo,
        postedBy: req.user._id, 
        title: req.body.title,
        createdAt: req.body.createdAt 
    });

    res.status(201).json({
        status: "success",
        data: {
            blog: newBlogPost
        }
    });
});

exports.getAllBlogPosts = catchAsync(async (req, res, next) => {
    const blogPosts = await Blog.find().populate('postedBy', 'name'); 
    
    res.status(200).json({
        status: "success",
        data: {
            blogPosts
        }
    });
});