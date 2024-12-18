const { User } = require('../../entity/user')
const { HttpError, ERROR_CODES } = require('../../error')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { generateJWT, JWT_AGE } = require('../../jwt')

// login endpoint
async function login(req, res) {
    try {
        const json = req.body;
        console.log("POST /api/v1/auth/login: Login request received");
        let user = await User.getByEmail(json['email'])

        // verify if password is correct
        if (!await bcrypt.compare(json['password'], user.password))
            throw ERROR_CODES.InvalidPassword;

        // generate a jwt
        const token = generateJWT(user.id);

        res
            .cookie('jwt', token, { maxAge: JWT_AGE * 1000, httpOnly: false })
            .json({ id: user.id, email: user.email, createdAt: user.createdAt })
            .send;
    } 
    catch (e) {
        console.log(e[1]);
        res.json(new HttpError(400, e[0], e[1]));
        res.status(400).end();
    }
}

// registration endpoint
async function register(req, res) {
    try {
        let json = req.body;
        console.log("POST /api/v1/auth/register: Registration request received");
        
        const salt = await bcrypt.genSalt();
        const bcryptPassword = await bcrypt.hash(json['password'], salt);
        json['password'] = bcryptPassword;
        let user = await User.createUser(json);

        // generate a jwt token
        const token = await generateJWT(user.id);

        res
            .status(201)
            .cookie('jwt', token, { maxAge: JWT_AGE * 1000, httpOnly: false })
            .json({ id: user.id, email: user.email, createdAt: user.createdAt })
            .send;
    }
    catch (e) {
        console.log(e[1]);
        res.json(new HttpError(400, e[0], e[1]));
        res.status(400).end();
    }
}

// export router
let router = require('express').Router();
router.post('/login', login);
router.post('/register', register);

module.exports = router;