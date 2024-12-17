class HttpError {
    constructor(httpCode, code, msg) {
        this.httpCode = httpCode;
        this.code = code;
        this.msg = msg;
    }
}

// all possible error codes
const ERROR_CODES = {
    Success: [0, 'success'],
    NotFound: [1, 'not found'],
    NotAuthorized: [2, 'not authorized'],
    PersistenceError: [3, 'persistence error'],
    InvalidEmail: [4, 'invalid email'],
    InvalidPassword: [5, 'invalid password'],
    EmailAlreadyExists: [6, 'email is already in use']
}

module.exports = { HttpError, ERROR_CODES };