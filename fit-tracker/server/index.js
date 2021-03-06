const express = require('express')

const {getPosts, addPost, editPost, deletePost} = require('./controller/postController')

const app = express()

app.use(express.json())

// GET
app.get('/api/posts', getPosts)
// POST
app.post('/api/add_post', addPost)
// PUT
app.put('/api/edit_post/:id', editPost)
//DELETE
app.delete('/api/delete_post/:id', deletePost)

// console.log(posts)

const port = 3001

app.listen(port, () => console.log(`listening on port ${port}`))

