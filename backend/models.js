class Post {
    constructor(id=null, userId=null, body=null, likesCount=null, editedAt=null, createdAt=null) {
        this.id = id;
        this.userId = userId;
        this.body = body;
        this.likesCount = likesCount;
        this.editedAt = editedAt;
        this.createdAt = createdAt;
    }

    static posts = [
        new Post(
            1,
            1,
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            10,
            new Date("2024-11-03T17:02:30+0200"),
            new Date("2024-11-03T17:02:30+0200")
        ),
        new Post(
            2,
            1,
            "Tartu is an interesting place",
            13,
            new Date("2024-11-03T17:02:30+0200"),
            new Date("2024-11-03T17:02:30+0200")
        ),
        new Post(
            3,
            1,
            "See pilt läheb väga kõvasti!",
            120,
            new Date("2024-11-03T17:02:30+0200"),
            new Date("2024-11-03T17:02:30+0200")
        ),
        new Post(
            4,
            1,
            "Does anybody know where the lecture takes place?",
            19,
            new Date("2024-11-03T17:02:30+0200"),
            new Date("2024-11-03T17:02:30+0200")
        ),
        new Post(
            5,
            1,
            "The joke is that the place is called Sneed's Feed & Seed which is clever in itself and quite funny to those with a mature sense of humour but what's really just hilarious about it is that if you look closely at the front of this store, Sneed's Feed & Seed, you can see a line that reads Formerly Chuck's. Now, this might go over the average viewer's head as this, THIS, is peak comedy. I doubt anything will ever be as funny as the joke about Sneed's Feed & Seed. Are you ready for this one? So, like I said, the place is called Sneed's Feed & Seed and this sign says Formerly Chuck's, which means that when Chuck owned the place, well, I don't have to tell you...",
            34,
            new Date("2024-11-03T17:02:30+0200"),
            new Date("2024-11-03T17:02:30+0200")
        ),
        new Post(
            6,
            1,
            "Example post",
            34,
            new Date("2024-11-03T17:02:30+0200"),
            new Date("2024-11-03T17:02:30+0200")
        ),
        new Post(
            7,
            1,
            "TestPost",
            34,
            new Date("2024-11-03T17:02:30+0200"),
            new Date("2024-11-03T17:02:30+0200")
        ),
        new Post(
            8,
            1,
            "What am I doing?",
            34,
            new Date("2024-11-03T17:02:30+0200"),
            new Date("2024-11-03T17:02:30+0200")
        ),
        new Post(
            9,
            1,
            "How is it even possible?",
            34,
            new Date("2024-11-03T17:02:30+0200"),
            new Date("2024-11-03T17:02:30+0200")
        ),
        new Post(
            10,
            1,
            "Please try to understand this code",
            15,
            new Date("2024-11-03T17:02:30+0200"),
            new Date("2024-11-03T17:02:30+0200")
        )
    ]

    // queries a post by given id
    static getById(id) {
        let filteredPosts = this.posts.filter((p) => p.id == id)
        if (filteredPosts.length == 0) {
            throw "not found";
        }
        return filteredPosts[0];
    }

    // queries all this.posts
    static getAllPosts() {
        return this.posts;
    }

    // adds a post
    static addPost(post) {
        post.id = this.posts.length > 0 ? this.posts[this.posts.length - 1] + 1 : 1;
        this.posts.push(post)
        return post
    }

    // updates a post
    static update(post) {
        let filteredPosts = this.posts.filter((v) => v.id == post.id)
        if (filteredPosts.length == 0)
            throw "not found";

        // perform the update
        if (post.body !== null)
            filteredPosts[0].body = post.body
        return filteredPosts[0];
    }

    // deletes a post
    static delete(post) {
        deletedPosts = this.posts.filter(this.posts.filter((p) => p.id == post.id))
        if (deletedPost.length == 0)
            throw "not found";
        this.posts = this.posts.filter((p) => p.id != post.id);
        return deletedPost[0];
    }

    // deletes all posts
    static deleteAll() {
        let deletedPosts = this.posts;
        this.posts = [];
        return deletedPosts;
    }
}

module.exports = Post;