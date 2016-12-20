/**
 * Created by longcz on 2016/12/19.
 */
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger'
import rootReducer from "./reducer";
import actionCreators from "./actionCreators";

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer
);


function logger(store) {
  let next = store.dispatch;

  return function dispatchAndLog(action) {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }
}
function logger2(store) {
  let next = store.dispatch;//这一步很重要，保存上一个middleware

  return function dispatchAndLog(action) {
    console.log('dispatching2>>>', action)
    let result = next(action)
    console.log('next state2>>>', store.getState())
    return result
  }
}
function applyMiddlewareByMonkeypatching(store, middlewares) {
  middlewares = middlewares.slice()
  middlewares.reverse()

  // 在每一个 middleware 中变换 dispatch 方法。
  middlewares.forEach(middleware =>
    store.dispatch = middleware(store)
  )
}

applyMiddlewareByMonkeypatching(store, [ logger,logger2]);

store.dispatch(actionCreators.request(123));
store.dispatch(actionCreators.success(456));