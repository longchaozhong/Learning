/**
 * Created by longcz on 2016/10/11.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const RouteLink = ({filter, children})=> {
  return (
    <Link activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }} to={filter === 'SHOW_ALL' ? '' : filter}>{children}</Link>
  );
};

export default RouteLink;