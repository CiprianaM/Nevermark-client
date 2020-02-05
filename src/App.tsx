import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import ResultsLanding from './pages/ResultsLanding/ResultsLanding';
import SettingsLanding from './pages/SettingsLanding/SettingsLanding';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={ResultsLanding} />
      <Route path="/settings" component={SettingsLanding} />
    </Switch>
  </Router>
);

export default App;
