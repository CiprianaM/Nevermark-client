import React from 'react';

import PropTypes from 'prop-types';

import './CallToSignup.css';

interface CallToSignupProps {
  handleSignOpen: any;
  handleLogOpen: any;
}

const CallToSignup: React.FC<CallToSignupProps> = ({ handleSignOpen,handleLogOpen }) => (
  <>
    <div className="cts-cont">
      <div className="cts-cont-divider">
        <div className="title-phrase-cts-cont">
          <h1 className="title-cts">Browser history search done properly.</h1>
          <h3 className="phrase-cts">We eliminate the need for bookmarks with our potent search algorithm.</h3>
          <button className="cts-submit" type="submit" onClick={handleSignOpen}>
            <span className="cts-submit-text">Sign Up</span>
          </button>
          <div className="cts-already-login-cont">
            <span className="cts-already-login">Already have an account? </span>
            <button className="cts-login" type="submit" onClick={handleLogOpen}>
              <span className="cts-already-login-link">Log In.</span>
            </button>
          </div>
        </div>
        <div className="gif-cts-cont">
          <iframe title="nevermark" src="https://media.giphy.com/media/l1rW1J0NW2wKjPpmjV/giphy.gif" width="480" height="318" frameBorder="0" className="giphy-embed" allowFullScreen />
        </div>
      </div>
    </div>
  </>
);

CallToSignup.propTypes = {
  handleSignOpen : PropTypes.func.isRequired,
  handleLogOpen : PropTypes.func.isRequired,
};

export default CallToSignup;
