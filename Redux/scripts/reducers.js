/**
 * Created by longcz on 2016/10/9.
 */
import {combineReducers} from 'redux';
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from './actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: {
      return action.filter;
    }
    default:
      return state;
  }
};

const todos = (state = [], action)=> {
  switch (action.type) {
    case ADD_TODO: {
      return Object.assign([], state, [...state, {text: action.text, completed: false}]);
    }
    case TOGGLE_TODO: {
      return Object.assign([], state,
        state.todos.map((todo, index) => {
            if (index === action.index) {
              return Object.assign({}, todo, {
                completed: !todo.completed
              })
            }
            return todo
          }
        )
      );
    }
    default :
      return state;
  }
};


export function todoAppReducer(state = initialState, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}

//Redux的combineReducers函数提供了上面todoAppReducer函数的功能
export const todoApp = combineReducers({
  visibilityFilter,
  todos
});