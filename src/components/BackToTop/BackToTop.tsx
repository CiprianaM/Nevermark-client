import React from 'react';
import PropTypes from 'prop-types';

import './BackToTop.css';

interface BackToTopProps {
  backToTop: any,
  hasScrolled: boolean
}

const BackToTop: React.FC<BackToTopProps> = ({ backToTop,hasScrolled }) => (
  <>
    <button className={hasScrolled ? 'to-top-btn-show' : 'to-top-btn-not'} onClick={backToTop} type="submit">
      <span className="to-top-text">Go to top</span>
    </button>
  </>
);

BackToTop.propTypes = {
  backToTop : PropTypes.func.isRequired,
  hasScrolled : PropTypes.bool.isRequired,
};

export default BackToTop;
