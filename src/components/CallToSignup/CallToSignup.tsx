import React from 'react';

import './CallToSignup.css';

const CallToSignup: React.FC = () => (
  <>
    <div className="cts-cont">
      <div className="cts-cont-divider">
        <div className="title-phrase-cts-cont">
          <h1 className="title-cts">History search done properly.</h1>
          <h3 className="phrase-cts">We eliminate the need for bookmarks with our potent search algorithm.</h3>
          <button className="cts-submit" type="submit">
            <span className="cts-submit-text">Sign Up</span>
          </button>
          <div className="cts-already-login-cont">
            <span className="cts-already-login">Already have an account? </span>
            <a href="#login" className="cts-already-login-link">Log in.</a>
          </div>
        </div>
        <div className="gif-cts-cont">
          <iframe title="nevermark" src="https://media.giphy.com/media/l1rW1J0NW2wKjPpmjV/giphy.gif" width="480" height="318" frameBorder="0" className="giphy-embed" allowFullScreen />
        </div>
      </div>
    </div>
  </>
);

export default CallToSignup;
