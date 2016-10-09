/**
 * Created by longcz on 2016/10/9.
 */
import React, {PropTypes} from 'react';

import Todo from './Todo';

const TodoList = React.createClass({
  render(){
    const {props} = this.props;
    return (
      <ul>
        {props.todos.map(todo=>(
          <Todo {...todo} key={todo.id} onClick={}/>
        ))}
      </ul>
    );
  }
});

TodoList.propTypes({
  onClick: PropTypes.func.isRequired,
  complete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
});
