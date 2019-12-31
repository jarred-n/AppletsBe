const Router = require('koa-router');
const { HttpException } = require('../../../core/http-exception');
const { PositiveIntegerValidator } = require('../../validators/validators');
const router = new Router();

router.get('/', (ctx, next) => {
    console.log(ctx.method);
    ctx.body = 'success';
})

router.post('/post/:id', async (ctx, next) => {
    console.log(ctx.params.id)
    console.log(typeof ctx.params.id)
    const v = await new PositiveIntegerValidator().validate(ctx);
    const id =  v.get('path.id', parsed=false);
    ctx.body = `post success-${id}-${typeof id}`;
})

module.exports = router;