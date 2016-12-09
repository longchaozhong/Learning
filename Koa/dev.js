const path = require('path');
const koa = require('koa');
const Router = require('koa-router');
const staticResources = require('koa-static');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');
const proxy = require('koa-proxy');

const config = require('./config');
const sitePath = path.join(__dirname, '../');

const app = koa();
const __PROD__ = process.env.NODE_ENV === 'production';
let proxyKey = 'api/';

app.use(bodyParser());

if(__PROD__){
  //压缩处理

  //静态文件
  // app.use(staticResources(sitePath));
}else{
  const webpack = require('webpack');
  const devconfig = require('../webpack-dev.config');
  const compiler = webpack(devconfig);

  app.use(require('koa-webpack-dev-middleware')(compiler, {
    // noInfo: true,
    stats: {
      colors: true
    },
    publicPath: devconfig.output.publicPath
  }));

  app.use(require('koa-webpack-hot-middleware')(compiler));
  app.use(require('koa-logger')());
}

// static/lib有被引用的JS，需要放行
app.use(staticResources(sitePath));

render(app, {
  root: sitePath,
  layout: false,
  viewExt: 'html',
  debug: true,
  cache: false
});



//==================================================

let token = '',
  tenantmode = config.tenantmode,
  baseAlias = config.baseAlias.substr(1),
  indexHtml = __PROD__ ? `/static/index` : `/static/index-dev`;

/**
 * 页面路由，页面入口可能从passport进来，会带有租户代码，这里需要处理
 */
let router = new Router();

if(!tenantmode&&!baseAlias){

  router.all('/', function *() {
    if(this.request.path.indexOf(proxyKey) !== -1){
      return;
    }
    yield this.render(indexHtml);
  });

  router.get('/*', function *(next) {
    if(this.request.path.indexOf(proxyKey) !== -1){
      return;
    }
    if(this.request.path.indexOf('mock') !== -1){
      return;
    }
    yield this.render(indexHtml);
  });

}else{
  router.all('/', function *() {
    this.redirect(`${token}/${baseAlias}`);
    this.status = 301;
  });

  router.get(`${token}/${baseAlias}`, function *() {
    yield this.render(indexHtml);
  });

  router.get(`${token}/${baseAlias}/*`, function *() {
    yield this.render(indexHtml);
  });
  router.get('*', function *(next) {
    if(this.request.path.indexOf(proxyKey) !== -1){
      return;
    }
    let urlKeys = this.request.path.split('/')

    if(urlKeys.length > 1 && urlKeys[2] == baseAlias){
      token = '/' + urlKeys[1]
      yield this.render(indexHtml);
    }
  });
}

app.use(router.routes());
app.listen(config.serverPort, config.serverHostName, function(){
  console.log('Listening at http://localhost:' + config.serverPort);
});
