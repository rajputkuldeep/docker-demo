const Post = require("../models/postModel")

exports.getAllPost = async (req, res, next) => {
    try {
        const post = await Post.find()
        return res.status(200).json({
            data: post,
            result: post.length,
            message: "success"
        })
    } catch (e) {
        return res.json({
            message: 'fail'
        })
    }
}

exports.getOnePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)
        return res.status(200).json({
            data: post,
            message: "success"
        })
    } catch (e) {
        return res.json({
            message: 'fail'
        })
    }
}

exports.createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body)
        return res.status(200).json({
            data: post,
            message: "success"
        })
    } catch (e) {
        return res.json({
            message: 'fail'
        })
    }
}


exports.updatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        return res.status(200).json({
            data: post,
            message: "success"
        })
    } catch (e) {
        return res.json({
            message: 'fail'
        })
    }
}


exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: "success"
        })
    } catch (e) {
        return res.json({
            message: 'fail'
        })
    }
}