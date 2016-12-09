/**
 * Created by longcz on 2016/12/9.
 */

/**
 * Module dependencies.
 */

var logger = require('koa-logger');
var serve = require('koa-static');
var parse = require('co-busboy');
var Router = require('koa-router');
var koa = require('koa');
var fs = require('fs');
var app = koa();
var os = require('os');
var path = require('path');

// log requests

app.use(logger());

// custom 404

app.use(function *(next) {
  yield next;
  if (this.body || !this.idempotent) return;
  this.redirect('/404.html');
});

var router = new Router();

router.post('/upload', function *(next) {
  // multipart upload
  var parts = parse(this);
  var part;

  while ((part = yield parts)) {
    var stream = fs.createWriteStream(path.join(__dirname + '/upload', part.filename));
    part.pipe(stream);
    console.log('uploading %s -> %s', part.filename, stream.path);
  }
  this.body = {result: true};
});
app.use(router.routes());

// serve files from ./public
app.use(serve(path.join(__dirname, '/public')));

// listen
app.listen(3000);
console.log('listening on port 3000');
