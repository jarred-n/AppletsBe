class HttpException extends Error {
    constructor(msg='服务器异常', errorCode=10000, code=400) {
        super()
        this.msg = msg;
        this.errorCode = errorCode;
        this.code = code;
    }
}

class ParametersException extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 400;
        this.msg = msg || '参数错误';
        this.errorCode =  errorCode || 10000;
    }
}

class Success extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 201;
        this.msg = msg || 'ok';
        this.errorCode = errorCode || 0;
    }
}

class NotFound extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 404;
        this.msg = msg || '资源未找到';
        this.errorCode = errorCode || 1000;
    }
}

class AuthFailed extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 401;
        this.msg = msg || '授权失败';
        this.errorCode = errorCode || 1000;
    }
}

module.exports = {
    HttpException,
    ParametersException,
    Success,
    NotFound,
    AuthFailed
}