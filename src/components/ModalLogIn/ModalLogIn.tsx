import React from 'react';
import PropTypes from 'prop-types';

import googleIcon from '../../assets/google-icon.svg';
import exitIcon from '../../assets/exit-icon.svg';

import './ModalLogIn.css';

interface ModalLogInProps {
  show: number;
  handleLogClose: any;
}

const ModalLogIn: React.FC<ModalLogInProps> = ({ show,handleLogClose }) => {
  const showHideLogIn: string = show ? 'modal-login dis-block' : 'modal-login dis-none';
  return (
    <div className={showHideLogIn} role="dialog">
      <section className="modal-container">
        <div className="exit-login-cont">
          <button className="exit-login-butt" type="button" onClick={handleLogClose}>
            <img src={exitIcon} alt="Exit Icon" className="exit-icon" />
          </button>
        </div>
        <div className="title-modal-login-cont">
          <h3 className="modal-login-title">Welcome back.</h3>
        </div>
        <div className="description-modal-login">
          Log in to unleash the power of nevermark.
        </div>
        <a href={`${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_SERVER_GOOGLE_AUTH_ROUTE}`} className="link-create-googl">
          <div className="google-create-cont">
            <img src={googleIcon} alt="Google Icon" className="google-icon" />
            <span className="login-with-google">Log in with Google</span>
          </div>
        </a>
      </section>
    </div>
  );
};

ModalLogIn.propTypes = {
  show : PropTypes.number.isRequired,
  handleLogClose : PropTypes.func.isRequired,
};

export default ModalLogIn;
