// imports
const express = require('express')
const cors = require('cors')
const Post = require('./models')
const ErrorMessage = require('./error')
const app = express();

app.use(cors())
app.use(express.json())

// CRUD endpoints for posts
// Create
app.post('/api/v1/posts', (req, res) => {
    try {
        const json = req.body;
        console.log("Post creation request received")
        let post = new Post(
            id=0,
            userId=1,
            likesCount=json.likesCount || 69,
            body=json.body,
            editedAt=Date.now(),
            createdAt=Date.now()
        )

        res.json(Post.addPost(post))
    }
    catch (e) {
        console.error(e)
        res.json(new ErrorMessage(code=400, e))
        res.status(400).end()
    }
});

// Read
app.get('/api/v1/posts', (req, res) => {
    new Post()
    res.json(Post.getAllPosts())
})

app.get('/api/v1/posts/:id', (req, res) => {
    try {
        const { id } = req.params
        res.json(Post.getById(id))
    }
    catch (e) {
        console.error(e)
        res.json(new ErrorMessage(code=400, e))
        res.status(400)
        res.end()
    }
})

// Update
app.patch('/api/v1/posts/:id', (req, res) => {
    try {
        const { id } = req.params
        const json = req.body
        res.json(Post.update(json))
    }
    catch (e) {
        console.error(e)
        res.json(new ErrorMessage(code=400, e))
        res.status(400)
        res.end()
    }
})

// Delete
app.delete('/api/v1/posts/:id', (req, res) => {
    try {
        const { id } = req.params
        res.json(Post.delete(new Post(id)))
    }
    catch (e) {
        console.error(e)
        res.json(new ErrorMessage(code=400, e))
        res.status(400)
        res.end()
    }
})

// Start the server at specified port
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})