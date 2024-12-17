const { ERROR_CODES } = require("./error");
const { pool } = require('./database')


class Post {
    constructor(id=null, userId=null, body=null, likesCount=null, editedAt=null, createdAt=null) {
        this.id = id;
        this.userId = userId;
        this.body = body;
        this.likesCount = likesCount;
        this.editedAt = editedAt;
        this.createdAt = createdAt;
    }

    // queries a post by given id
    static async getById(id) {
        const post = await pool.query(
            'SELECT * FROM posts WHERE id = $1',
            [id]
        )
        if (post.rows.length == 0)
            throw ERROR_CODES.NotFound;
        return new Post(post.rows[0].id, post.rows[0].user_id, post.rows[0].body, post.rows[0].likes_count, post.rows[0].edited_at, post.rows[0].created_at);
    }

    // queries all this.posts
    static async getAllPosts() {
        const query = await pool.query("SELECT * FROM posts");
        const allPosts = query.rows.map((val) =>
            new Post(val.id, val.user_id, val.body, val.likes_count, val.edited_at, val.created_at)
        )
        return allPosts;
    }

    // adds a post
    static async addPost(post) {
        const newPost = await pool.query(
            'INSERT INTO posts (user_id, body, likes_count) VALUES($1, $2, $3) RETURNING *',
            [post.userId, post.body, post.likesCount || 0]
        );
        if (newPost.rows.length == 0)
            throw ERROR_CODES.PersistenceError;
        return new Post(newPost.rows[0].id, newPost.rows[0].user_id, newPost.rows[0].body, newPost.rows[0].likes_count, newPost.rows[0].edited_at, newPost.rows[0].created_at);
    }

    // updates a post
    static async update(id, post) {
        if (post.body !== null) {
            const updatedPost = await pool.query(
                'UPDATE posts SET body=$1 WHERE id=$2 RETURNING *',
                [post.body, id]
            )

            if (updatedPost.rows.length == 0)
                throw ERROR_CODES.NotFound;

            return new Post(updatedPost.rows[0].id, updatedPost.rows[0].user_id, updatedPost.rows[0].body, updatedPost.rows[0].likes_count, updatedPost.rows[0].edited_at, updatedPost.rows[0].created_at);
        }

        return this.getById(id);
    }

    // deletes a post
    static async delete(post) {
        const deletedPost = await pool.query(
            'DELETE FROM posts WHERE id = $1 RETURNING *',
            [post.id]
        )

        if (deletedPost.rows.length == 0)
            throw ERROR_CODES.NotFound;

        return new Post(deletedPost.rows[0].id, deletedPost.rows[0].user_id, deletedPost.rows[0].body, deletedPost.rows[0].likes_count, deletedPost.rows[0].edited_at, deletedPost.rows[0].created_at);
    }

    // deletes all posts
    static async deleteAll() {
        const query = await pool.query(
            'DELETE FROM posts RETURNING *'
        )

        const deletedPosts = query.rows.map((val) =>
            new Post(val.id, val.user_id, val.body, val.likes_count, val.edited_at, val.created_at)
        ) 
        return deletedPosts;
    }
}

module.exports = { Post };