import React from 'react';
import ResultsLanding from './containers/ResultsLanding/ResultsLanding';
import { BrowserRouter as Router, Route, Redirect, Switch, RouteProps } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/search" component={ResultsLanding}/> {/* REPLACE HEADER FOR CONTAINER */}
      {/* I SHOULD HAVE A SEPARATE FILE WITH ROUTES AND HERE JUST PUT A MAP */}
      {/* <Route exact path={basicRoutes.map etcc} */}
      {/* <Route path="/" component={Home}/> */}
    </Router>
  );
}

export default App;
