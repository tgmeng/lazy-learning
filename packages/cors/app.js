const path = require('path');
const Koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');

const app = new Koa();

app.use(logger());
app.use(serve(path.join(__dirname, './public')));

app.listen(3001);
