import React from 'react';

import './Header.css';
import velogName from './img/velog-name.png';
import velogMenuBar from './img/velog-menu-bar.png';
import velogUserView from './img/velog-user-view.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__bar--wrapper">
        <VelogName />
        <VelogMenuBar />
      </div>
      <VelogUserView />
    </header>
  );
};

const VelogName = () => {
  return <img className="velog-name--img" src={velogName} alt="velogName" />;
};

const VelogMenuBar = () => {
  return <img className="velog-menu-bar--img" src={velogMenuBar} alt="velogMenuBar" />;
};

const VelogUserView = () => {
  return <img className="velog-user-view--img" src={velogUserView} alt="velogMenuBar" />;
};

export default Header;
