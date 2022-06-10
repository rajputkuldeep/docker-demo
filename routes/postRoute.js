const express = require('express')
const { getAllPost, createPost, getOnePost, updatePost, deletePost } = require('../controllers/postController')
const { protect } = require('../middleware/protect')
const router = express.Router()

router.route('/').get(getAllPost).post(protect, createPost)

router.route('/:id').get(getOnePost).patch(updatePost).delete(deletePost)


module.exports = router