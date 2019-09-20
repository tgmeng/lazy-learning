const Router = require('koa-router');

const test = require('./controller/test');

const router = new Router();

router.get('/test/hello', test.hello);

module.exports = router;
