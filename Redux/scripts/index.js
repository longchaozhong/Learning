/**
 * Created by longcz on 2016/10/9.
 */
import {createStore} from 'redux';

import {todoApp} from  './reducers';

const store = createStore(todoApp);

console.log(store.getState());