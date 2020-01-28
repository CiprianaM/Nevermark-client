import React,{ useState } from 'react';

import './Home.css';
import HeaderLoginSignup from '../../components/HeaderLoginSignup/HeaderLoginSignup';
import CallToSignup from '../../components/CallToSignup/CallToSignup';
import Footer from '../../components/Footer/Footer';
import ModalSignUp from '../../components/ModalSignUp/ModalSignUp';
import ModalLogIn from '../../components/ModalLogIn/ModalLogIn';

const Home: React.FC = () => {
  const [signmodal,setSignmodal] = useState(0);
  const [logmodal,setLogmodal] = useState(0);
  const showSignModal = () => {
    setSignmodal(1);
  };
  const hideSignModal = () => {
    setSignmodal(0);
  };
  const showLogModal = () => {
    setLogmodal(1);
  };
  const hideLogModal = () => {
    setLogmodal(0);
  };
  return (
    <>
      <ModalSignUp show={signmodal} handleSignClose={hideSignModal} />
      <ModalLogIn show={logmodal} handleLogClose={hideLogModal} />
      <HeaderLoginSignup handleSignOpen={showSignModal} handleLogOpen={showLogModal} />
      <CallToSignup handleSignOpen={showSignModal} handleLogOpen={showLogModal} />
      <Footer handleSignOpen={showSignModal} handleLogOpen={showLogModal} />
    </>
  );
};

export default Home;
