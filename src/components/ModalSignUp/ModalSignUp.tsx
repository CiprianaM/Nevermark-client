import React from 'react';
import PropTypes from 'prop-types';

import googleIcon from '../../assets/google-icon.svg';
import exitIcon from '../../assets/exit-icon.svg';

import './ModalSignUp.css';

interface ModalSignUpProps {
  show: number;
  handleSignClose: any;
}

const ModalSignUp: React.FC<ModalSignUpProps> = ({ show,handleSignClose }) => {
  const showHideSignUp: string = show ? 'modal-signup dis-block' : 'modal-signup dis-none';
  return (
    <div className={showHideSignUp} role="dialog">
      <section className="modal-container">
        <div className="exit-signup-cont">
          <button className="exit-signup-butt" type="button" onClick={handleSignClose}>
            <img src={exitIcon} alt="Exit Icon" className="exit-icon" />
          </button>
        </div>
        <div className="title-modal-signup-cont">
          <h3 className="modal-signup-title">Join</h3>
          <span className="logo-modal">nevermark.</span>
        </div>
        <div className="description-modal-signup">
          Create an account to boost the power of your history search and never lose a website again.
        </div>
        <a href={`${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_SERVER_GOOGLE_AUTH_ROUTE}`} className="link-create-googl">
          <div className="google-create-cont">
            <img src={googleIcon} alt="Google Icon" className="google-icon" />
            <span className="signup-with-google">Sign up with Google</span>
          </div>
        </a>
      </section>
    </div>
  );
};

ModalSignUp.propTypes = {
  show : PropTypes.number.isRequired,
  handleSignClose : PropTypes.func.isRequired,
};

export default ModalSignUp;
