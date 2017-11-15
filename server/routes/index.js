const Router = new (require('koa-router'))();

Router.post('/users', async ctx => {
    const { query, page } = ctx.request.body;

    try
    {
        const users = await ctx.vk.api.call('users.search', {
            q: query,
            offset: parseInt(page) * 10,
            count: 10,
            fields: 'photo_200,has_photo'
        });

        ctx.body = users;
    }
    catch (err)
    {
        console.log(err);
    }
    
});

Router.get('/user/:user_id', async ctx => {
    const { user_id } = ctx.params;

    try
    {
        const user = await ctx.vk.api.call('users.get', {
            user_ids: user_id,
            fields: 'bdate,city,has_photo,online,photo_max,relation,sex,status'
        });

        ctx.body = user;
    }
    catch (err)
    {
        console.log(err);
    }
});

module.exports = Router;