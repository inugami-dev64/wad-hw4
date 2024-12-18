const { ERROR_CODES } = require('../error')
const { pool } = require('../database')

class User {
    constructor(id=null, email=null, password=null, createdAt=null) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
    }

    static async getById(id) {
        const user = await pool.query(
            "SELECT * FROM users WHERE id = $1",
            [id]
        )
        if (user.rows.length == 0)
            throw ERROR_CODES.NotFound;
        return new User(user.rows[0].id, user.rows[0].email, user.rows[0].password, user.rows[0].created_at);
    }

    static async getByEmail(email) {
        const user = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if (user.rows.length == 0)
            throw ERROR_CODES.InvalidEmail;
        return new User(user.rows[0].id, user.rows[0].email, user.rows[0].password, user.rows[0].created_at);
    }

    static async isEmailInUse(email) {
        const user = await pool.query(
            "SELECT 1 FROM users WHERE email = $1",
            [email]
        );

        return user.rows.length != 0;
    }

    static async createUser(user) {
        try {
            const newUser = await pool.query(
                // we don't want to return the password hash
                "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id,email,created_at",
                [user.email, user.password]
            );

            return new User(newUser.rows[0].id, newUser.rows[0].email, null, newUser.rows[0].created_at);
        }
        catch (e) {
            throw ERROR_CODES.EmailAlreadyExists;
        }
    }
}

module.exports = { User }