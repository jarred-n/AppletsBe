const {HttpException} = require('../core/http-exception');

const catchError = async (ctx, next) => {
    try{
        await next();
    } catch (error) {
        const isHttpException = error instanceof HttpException;
        const isDev = global.config.enviroment === 'env';
        if(isDev && !isHttpException) {
            throw error
        }
        if(isHttpException) {
            ctx.body = {
                msg: error.msg,
                err_code: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        }
    }
}
module.exports = catchError