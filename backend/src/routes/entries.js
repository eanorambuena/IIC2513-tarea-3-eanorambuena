const Router = require('koa-router')

const router = new Router()

router.get('/', async (ctx) => {
    const entries = await ctx.orm.Entry
        .findAll()
    ctx.body = entries
})

module.exports = router
