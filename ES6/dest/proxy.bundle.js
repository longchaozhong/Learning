/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by longcz on 2016/10/13.
	 */
	var obj = { A: 1 };

	var agent = new Proxy(obj, {
	  get: function get(target, key, receiver) {
	    //拦截对象属性的读取，比如proxy.foo和proxy['foo']
	    console.log("getting " + key + "!");
	    return Reflect.get(target, key, receiver);
	  },
	  set: function set(target, key, value, receiver) {
	    //拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值
	    console.log("setting " + key + "!");
	    return Reflect.set(target, key, value, receiver);
	  },
	  has: function has(target, propKey) {
	    //拦截propKey in proxy的操作，以及对象的hasOwnProperty方法，返回一个布尔值
	  },
	  deleteProperty: function deleteProperty(target, propKey) {
	    //拦截delete proxy[propKey]的操作，返回一个布尔值
	  },
	  ownKeys: function ownKeys(target) {
	    //拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，
	    // 返回一个数组。该方法返回对象所有自身的属性，而Object.keys()仅返回对象可遍历的属性
	  },
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propKey) {
	    //拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象
	  },
	  defineProperty: function defineProperty(target, propKey, propDesc) {
	    //拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值
	  },
	  preventExtensions: function preventExtensions(target) {
	    //拦截Object.preventExtensions(proxy)，返回一个布尔值
	  },
	  getPrototypeOf: function getPrototypeOf(target) {
	    //拦截Object.getPrototypeOf(proxy)，返回一个对象
	  },
	  isExtensible: function isExtensible(target) {
	    //拦截Object.isExtensible(proxy)，返回一个布尔值
	  },
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    //拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截
	  },
	  apply: function apply(target, object, args) {
	    //拦截Proxy实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)
	  },
	  construct: function construct(target, args) {
	    //拦截Proxy实例作为构造函数调用的操作，比如new proxy(...args)
	  }
	});

	agent.B = 2;
	console.log("A", obj.A, "B", obj.B, "C", obj.C);

/***/ }
/******/ ]);