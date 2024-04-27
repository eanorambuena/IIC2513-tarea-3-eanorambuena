const Router = require('koa-router')

const router = new Router()

router.post('/', async (ctx) => {
    const body = ctx.request.body
    console.log(`Body: ${body}`)
    try {
        await ctx.orm.Entry
            .create(body)
        ctx.status = 201
    }
    catch (error) {
        ctx.body = { error: error.message }
        ctx.status = 500
    }
})

router.get('/', async (ctx) => {
    try {
        const entries = await ctx.orm.Entry
            .findAll()
        ctx.body = entries
    }
    catch (error) {
        ctx.body = { error: error.message }
        ctx.status = 500
    }
})


router.get('/user/:username', async (ctx) => {
    const username = ctx.params.username
    try {
        const entries = await ctx.orm.Entry
            .findAll({where: {belongs_to: username}})
        ctx.body = entries
    }
    catch (error) {
        ctx.body = { error: error.message }
        ctx.status = 500
    }
})

router.get('/:id', async (ctx) => {
    const id = ctx.params.id
    try {
        const entry = await ctx.orm.Entry
            .findByPk(id)
        if (entry) {
            ctx.body = entry
            ctx.status = 200
        }
        else {
            ctx.body = { error: 'Entry not found' }
            ctx.status = 404
        }
    }
    catch (error) {
        ctx.body = { error: error.message }
        ctx.status = 500
    }
})

router.patch('/:id', async (ctx) => {
    const id = ctx.params.id
    const body = ctx.request.body
    try {
        const entry = await ctx.orm.Entry
            .findByPk(id)
        await entry.update(body)
        ctx.body = entry
    }
    catch (error) {
        ctx.body = { error: error.message }
        ctx.status = 500
    }
})

router.delete('/:id', async (ctx) => {
    const id = ctx.params.id
    try {
        const entry = await ctx.orm.Entry
            .findByPk(id)
        await entry.destroy()
        ctx.status = 204
    }
    catch (error) {
        ctx.body = { error: error.message }
        ctx.status = 500
    }
})


module.exports = router
