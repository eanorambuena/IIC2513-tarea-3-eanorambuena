const Router = require('koa-router')

const router = new Router()

router.get('/:username', async (ctx) => {
    try {
        const user = await ctx.orm.User
            .findByPk(ctx.params.username)
        console.log(`User: ${user}`)
        if (user) {
            ctx.body = user
            ctx.status = 200
        } else {
            ctx.status = 404
        }
    }
    catch (error) {
        console.log(error)
        ctx.status = 500
    }
})

router.post('/', async (ctx) => {
    const body = ctx.request.body
    const user = {username: body.username}
    console.log(`Body: ${body}`)
    console.log(`User: ${user}`)
    try {
        await ctx.orm.User.create(user)
        ctx.status = 201
        ctx.body = user
    } catch (error) {
        ctx.status = 500
    }
})

module.exports = router
