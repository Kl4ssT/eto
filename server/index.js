const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

const app = new (require('koa'))();
const api = require('./api');

const router = require('./routes');

app.use(bodyParser());
app.use(cors());
app.use(api);

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, err => {
    console.log(err || 'Running');
});