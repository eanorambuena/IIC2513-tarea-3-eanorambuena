const Router = require('koa-router')

const router = new Router()

router.get('/users', async (ctx) => {
    const users = await ctx.orm.User
        .findAll()
    ctx.body = users
})
