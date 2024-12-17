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
    NotAuthorized: [2, 'not authorized'] 
}

module.exports = { HttpError, ERROR_CODES };