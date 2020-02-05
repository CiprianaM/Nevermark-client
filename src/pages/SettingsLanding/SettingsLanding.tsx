import React from 'react';

import Settings from '../../components/Settings/Settings';

import './SettingsLanding.css';
import HeaderLogged from '../../components/HeaderLogged/HeaderLogged';

const SettingsLanding: React.FC = () => (
  <>
    <HeaderLogged />
    <Settings />
  </>
);

export default SettingsLanding;
