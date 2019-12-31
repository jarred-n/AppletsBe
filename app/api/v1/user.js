const Router = require('koa-router');
const {RegisterValidator}  = require ('../../validators/validators');
const {User} = require('../../models/user');
const {success} = require('../../lib/helper')
const router = new Router({
    prefix: '/v1/user'
});

router.post('/register', async (ctx) => {
    // 参数： email password password2 nickname
    // 校验参数
    const v = await new RegisterValidator().validate(ctx);
    const user = {
        email: v.get('body.email'),
        password: v.get('body.password1'),
        nickname: v.get('body.nickname'),
    }
    const r = User.create(user);
    success()
});


module.exports = router;
