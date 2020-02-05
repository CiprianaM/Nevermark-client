import React,{ useState } from 'react';

import './Settings.css';

const Settings: React.FC = () => {
  // use state should bring the indexing state from the db
  const [indexing,setIndexing] = useState(false);
  const [isShown,setIsShown] = useState(false);
  const toggleIndexing = () => (indexing ? setIndexing(false) : setIndexing(true));
  const toggleHover = () => (isShown ? setIsShown(false) : setIsShown(true));
  return (
    <div className="settings-container">
      <div className="settings-title-container">
        <h2 className="settings-title">
          Settings
        </h2>
      </div>
      <div className="toggle-indexing">
        <h3 className="indexing-title">
          Indexing
        </h3>
        <div className="slider">
          <button type="submit" onClick={toggleIndexing} className={`button-slide on ${indexing ? 'slider-selected green' : 'slider-not'}`}>On</button>
          <button type="submit" onClick={toggleIndexing} className={`button-slide off ${indexing ? 'slider-not' : 'slider-selected red'}`}>Off</button>
        </div>
      </div>
      <div className="blacklist-container">
        <h3 className="blacklist-title">
          Not recording
        </h3>
        <div className="blocked-website">
          <div className="blocked-website-title cont">
            <h4 className="blocked-website-title">
            google
            </h4>
          </div>
          <button type="submit" onMouseEnter={toggleHover} onMouseLeave={toggleHover} className="button-blocked">{isShown ? 'Unblock' : 'Blocked'}</button>
        </div>
        <div className="block-input-container">
          <input type="text" placeholder="Add domain" className="block-input" />
        </div>
      </div>
    </div>
  );
};

export default Settings;
