/**
 * Created by longcz on 2016/10/11.
 */
import React, { PropTypes } from 'react'

const Button = ({onClick, text})=> {
  return (
    <button onClick={onClick}>{text}</button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;