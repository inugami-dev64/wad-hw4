const { Post } = require('../../models')
const { HttpError } = require('../../error')

// Creates a new post from user's request
function createPost(req, res) {
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

        res.json(Post.addPost(post))
    }
    catch (e) {
        console.error(e[1])
        res.json(new HttpError(400, e[0], e[1]));
        res.status(400).end()
    }
}

// gets all posts from the persistence layer
function getAllPosts(req, res) {
    console.log("GET /api/v1/posts: Fetching all posts")
    res.json(Post.getAllPosts())
}

// gets a post that is specified with given ID
function getPostById(req, res) {
    try {
        const { id } = req.params
        console.log("GET /api/v1/posts/:id: Fetching a post with ID " + id)
        res.json(Post.getById(id))
    }
    catch (e) {
        console.error(e[1])
        res.json(new HttpError(400, e[0], e[1]))
        res.status(400)
        res.end()
    }
}

// updates a post that was specified with given ID
function updatePost(req, res) {
    try {
        const { id } = req.params
        console.log("PATCH /api/v1/posts/:id: Updating a post with ID " + id)
        let json = req.body
        json['id'] = id;
        res.json(Post.update(json))
    }
    catch (e) {
        console.error(e[1])
        res.json(new HttpError(400, e[0], e[1]))
        res.status(400)
        res.end()
    }
}

// deletes a post that was specified with given ID
function deletePost(req, res) {
    try {
        const { id } = req.params
        console.log("DELETE /api/v1/posts/:id: Deleting a post with ID " + id)
        res.json(Post.delete(new Post(id)))
    }
    catch (e) {
        console.error(e[1])
        res.json(new HttpError(400, e[0], e[1]))
        res.status(400)
        res.end()
    }
}

// delete all posts
function deleteAll(req, res) {
    console.log("DELETE /api/v1/posts: Deleting all posts")
    res.json(Post.deleteAll());
}

let router = require('express').Router();
router.post('', createPost);
router.get('', getAllPosts);
router.get('/:id', getPostById);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.delete('', deleteAll);

module.exports = router;