/**
 * Created by longcz on 2016/10/9.
 */
import React, {PropTypes} from 'react';

const Todo = React.createClass({
  render(){
    const {props} = this.props;
    return (
      <li onClick={props.onClick} style={{textDecoration: (props.complete ? "line-through" : "none")}}>{props.text}</li>
    );
  }
});

Todo.propTypes({
  onClick: PropTypes.func.isRequired,
  complete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
});

export default Todo;