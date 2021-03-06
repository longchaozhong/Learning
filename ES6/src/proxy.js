/**
 * Created by longcz on 2016/10/13.
 */
let obj = {A: 1};

let agent = new Proxy(obj, {
  get(target, key, receiver) {
    //拦截对象属性的读取，比如proxy.foo和proxy['foo']
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver){
    //拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  },
  has(target, propKey){
    //拦截propKey in proxy的操作，以及对象的hasOwnProperty方法，返回一个布尔值
  },
  deleteProperty(target, propKey){
    //拦截delete proxy[propKey]的操作，返回一个布尔值
  },
  ownKeys(target){
    //拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，
    // 返回一个数组。该方法返回对象所有自身的属性，而Object.keys()仅返回对象可遍历的属性
  },
  getOwnPropertyDescriptor(target, propKey){
    //拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象
  },
  defineProperty(target, propKey, propDesc){
    //拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值
  },
  preventExtensions(target){
    //拦截Object.preventExtensions(proxy)，返回一个布尔值
  },
  getPrototypeOf(target){
    //拦截Object.getPrototypeOf(proxy)，返回一个对象
  },
  isExtensible(target){
    //拦截Object.isExtensible(proxy)，返回一个布尔值
  },
  setPrototypeOf(target, proto){
    //拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截
  },
  apply(target, object, args){
    //拦截Proxy实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)
  },
  construct(target, args){
    //拦截Proxy实例作为构造函数调用的操作，比如new proxy(...args)
  }
});

agent.B = 2;
console.log("A", obj.A, "B", obj.B, "C", obj.C);

