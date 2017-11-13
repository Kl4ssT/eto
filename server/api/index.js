const vkApi = new (require('node-vkapi'))();
const config = require('../config.json');

module.exports = async (ctx, next) => {
    try
    {
        const token = await vkApi.logIn({
            appId: config.appId,
            login: config.login,
            password: config.password
        });
    
        ctx.vk = {
            api: vkApi,
            token: token.token_access
        };
    
        await next();
    }
    catch (err)
    {
        ctx.status = err.code || 500;
        ctx.body = {
            message: err.message
        };
    }
    
};