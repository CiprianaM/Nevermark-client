import React from 'react';

import './HeaderLoginSignup.css';

const HeaderLoginSignup: React.FC = () => (
  <header className="header-loginsignup">
    <div className="logo-container-loginsignup">
      <a href="#home" className="logo-loginsignup">nevermark</a>
    </div>
    <nav className="header-loginsignup-nav">
      <ul className="nav-list-loginsignup">
        <li className="nav-element-loginsignup">
          <div className="hls-cont-navel">
            <a href="#features" className="link-loginsignup">Features</a>
          </div>
        </li>
        <li className="nav-element-loginsignup">
          <div className="hls-cont-navel">
            <a href="#features" className="link-loginsignup">Pricing</a>
          </div>
        </li>
        <li className="nav-element-loginsignup">
          <div className="hls-cont-navel">
            <a href="#features" className="link-loginsignup">About</a>
          </div>
        </li>
        <li className="nav-element-loginsignup">
          <div className="hls-cont-navel">
            <a href="#signup" className="link-loginsignup">Sign up</a>
          </div>
        </li>
        <li className="nav-element-loginsignup last">
          <div className="hls-cont-navel">
            <a href="#settings" className="link-loginsignup">Log in</a>
          </div>
        </li>
      </ul>
    </nav>
  </header>
);

export default HeaderLoginSignup;
