/**
 * Created by longcz on 2016/12/13.
 */
require("angular");
var listTemplate = require('../templates/list.html');
var listController = require('../controllers/listController');

require("../APP").component('listComponent', {
  template: "<h1>AAAAAAA</h1>",
  controller: function() {
    this.list = [{name:"AAA"}];
    this.openDetail = function (item) {
      console.info(item);
    };
  }
});