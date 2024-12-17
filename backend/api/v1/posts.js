const { Post } = require('../../models')
const { HttpError } = require('../../error')

// Creates a new post from user's request
async function createPost(req, res) {
    try {
        const json = req.body;
        console.log("POST /api/v1/posts: Post creation request received")
        let post = new Post(
            id=0,
            userId=1,
            body=json.body,
            likesCount=json.likesCount || 69,
            editedAt=Date.now(),
            createdAt=Date.now()
        )

        const newPost = await Post.addPost(post);
        res.json(newPost)
    }
    catch (e) {
        console.error(e[1])
        res.json(new HttpError(400, e[0], e[1]));
        res.status(400).end()
    }
}

// gets all posts from the persistence layer
async function getAllPosts(req, res) {
    console.log("GET /api/v1/posts: Fetching all posts")
    let posts = await Post.getAllPosts();
    res.json(posts)
}

// gets a post that is specified with given ID
async function getPostById(req, res) {
    try {
        const { id } = req.params
        console.log("GET /api/v1/posts/:id: Fetching a post with ID " + id)
        const post = await Post.getById(id)
        res.json(post)
    }
    catch (e) {
        console.error(e[1])
        res.json(new HttpError(400, e[0], e[1]))
        res.status(400)
        res.end()
    }
}

// updates a post that was specified with given ID
async function updatePost(req, res) {
    try {
        const { id } = req.params
        console.log("PATCH /api/v1/posts/:id: Updating a post with ID " + id)
        let json = req.body
        const updatedPost = await Post.update(id, json)
        res.json(updatedPost)
    }
    catch (e) {
        console.error(e[1])
        res.json(new HttpError(400, e[0], e[1]))
        res.status(400)
        res.end()
    }
}

// deletes a post that was specified with given ID
async function deletePost(req, res) {
    try {
        const { id } = req.params
        console.log("DELETE /api/v1/posts/:id: Deleting a post with ID " + id)
        const deletedPost = await Post.delete(new Post(id))
        res.json(deletedPost)
    }
    catch (e) {
        console.error(e[1])
        res.json(new HttpError(400, e[0], e[1]))
        res.status(400)
        res.end()
    }
}

// delete all posts
async function deleteAll(req, res) {
    console.log("DELETE /api/v1/posts: Deleting all posts")
    const deletedPosts = await Post.deleteAll();
    res.json(deletedPosts);
}

let router = require('express').Router();
router.post('', createPost);
router.get('', getAllPosts);
router.get('/:id', getPostById);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.delete('', deleteAll);

module.exports = router;