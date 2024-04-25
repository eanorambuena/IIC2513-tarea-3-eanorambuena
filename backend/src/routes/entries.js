const Router = require('koa-router')

const router = new Router()

router.get('/entries', async (ctx) => {
    const entries = await ctx.orm.Entry
        .findAll()
    ctx.body = entries
})
