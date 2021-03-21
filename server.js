const koa = require('koa');

// const app = new koa();
// app.use(ctx => {
//     ctx.body = 'Hello World';
// });
//app.listen(3000);
//
// console.log('Application is running on port 3000');


const bodyParser = require('koa-bodyparser');

const HomeRoutes = require('./routes/home.router');

const app = new koa();

app.use(bodyParser());

app.use(HomeRoutes.routes()).use(HomeRoutes.allowedMethods());

// app.listen(3000);
//
// console.log('Application is running on port 3000');

const PostRoutes = require('./routes/post.routes');

app.use(PostRoutes.routes()).use(PostRoutes.allowedMethods());

app.listen(3000);

console.log('Application is running on port 3000');
