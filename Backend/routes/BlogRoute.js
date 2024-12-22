const express = require('express');
const router = express.Router();
const Blog =require("../models/Blog")
// Get all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a blog by ID
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        console.log(blog);
        
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json(blog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new blog
router.post('/createblog', async (req, res) => {
    const { title, image, description, author,...blogdata } = req.body;
    console.log(req.files);
    
    if(req.files)
    console.log(title);
    
    const blog = new Blog({ title, image, description, author });

    try {
        //this line will store in data base
        const newBlog = await blog.save();
        
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;