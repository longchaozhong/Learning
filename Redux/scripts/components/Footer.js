import React from 'react'
import FilterLink from '../containers/FilterLink'
import RouteLink from  './RouteLink';

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>

    <br/>
    Show:
    {" "}
    <RouteLink filter="SHOW_ALL">
      All
    </RouteLink>
    {", "}
    <RouteLink filter="SHOW_ACTIVE">
      Active
    </RouteLink>
    {", "}
    <RouteLink filter="SHOW_COMPLETED">
      Completed
    </RouteLink>
  </p>
);

export default Footer
