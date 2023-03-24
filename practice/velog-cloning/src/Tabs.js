import React from 'react';
import { NavLink } from 'react-router-dom';

import './Tabs.css';

const Tabs = () => {
  return (
    <div className="Link--container">
      <Tab to="/" content="글" />
      <Tab to="/series" content="시리즈" />
      <Tab to="/about" content="소개" />
    </div>
  );
};

const Tab = ({ to, content }) => {
  const activeStyle = {
    color: '#62e6be',
  };

  return (
    <NavLink
      className="link"
      to={to}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {content}
    </NavLink>
  );
};

export default Tabs;
