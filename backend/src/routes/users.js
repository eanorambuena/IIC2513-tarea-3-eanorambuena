const Router = require('koa-router')

const router = new Router()

router.get('/', async (ctx) => {
    const users = await ctx.orm.User
        .findAll()
    ctx.body = users
    ctx.status = 200
})

router.get('/:username', async (ctx) => {
    const user = await ctx.orm.User
        .findByPk(ctx.params.username)
    if (user) {
        ctx.body = user
        ctx.status = 200
    } else {
        ctx.status = 404
    }
})

module.exports = router
