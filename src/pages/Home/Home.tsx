import React from 'react';

import './Home.css';
import HeaderLoginSignup from '../../components/HeaderLoginSignup/HeaderLoginSignup';
import CallToSignup from '../../components/CallToSignup/CallToSignup';

const Home: React.FC = () => (
  <>
    <HeaderLoginSignup />
    <CallToSignup />
  </>
);

export default Home;
