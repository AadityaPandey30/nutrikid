const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    postedby:{
        type : mongoose.Schema.Types.ObjectId ,
        ref: 'User',
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
   
    createdAttime: {
        type: Date,
        required: true,
        default: Date.now 
    }
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
