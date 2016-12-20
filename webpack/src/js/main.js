/**
 * Created by longcz on 2016/12/12.
 */
require("../css/main.css");
require("../less/main.less");
require.ensure([], function(require){
  require('./test');
});
require("../lib/MyLib");
console.info(">>>>>>>>>>>>Main1<<<<<<<<<<<<<<<<<");
console.info(">>>>>>>>>>>>Main2<<<<<<<<<<<<<<<<<");
console.info(">>>>>>>>>>>>Main3<<<<<<<<<<<<<<<<<");
