/**
 * Created by longcz on 2016/12/12.
 */
require("angular");
require("angular-ui-router");
var APP = require("./APP");
var listTemplate = require('./templates/list.html');
var listController = require('./controllers/listController');

angular.module('APP').component('listComponent', {
  template: "<h1>BBBBBB</h1>",
  controller: function() {
    this.list = [{name:"AAA"}];
    this.openDetail = function (item) {
      console.info(item);
    };
  }
});

APP.config(function ($stateProvider) {
  $stateProvider.state({
    name: "list",
    url: "/list",
    component: "listComponent"
  });
});