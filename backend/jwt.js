const jwt = require('jsonwebtoken');
const { ERROR_CODES, HttpError } = require('./error');

const JWT_SECRET = process.env.JWT_SECRET || "password";
const JWT_AGE = 60 * 60

const generateJWT = (id) => {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: JWT_AGE });
}

const jwtAuthenticationMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        await jwt.verify(token, JWT_SECRET, (err) => {
            if (err) {
                let error = ERROR_CODES.NotAuthorized
                res.status(400).json(new HttpError(400, error[0], error[1])).send;
            } else {
                next();
            }
        })
    } catch (e) {
        let error = ERROR_CODES.NotAuthorized
        res.status(400).json(new HttpError(400, error[0], error[1])).send;
    }
}

module.exports = { JWT_SECRET, JWT_AGE, generateJWT, jwtAuthenticationMiddleware }