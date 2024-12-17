const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || "password";
const JWT_AGE = 60 * 60

const generateJWT = (id) => {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: JWT_AGE });
}

module.exports = { JWT_SECRET, JWT_AGE, generateJWT }