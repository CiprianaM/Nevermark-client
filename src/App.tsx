import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import ResultsLanding from './pages/ResultsLanding/ResultsLanding';

const App: React.FC = () => (
  <Router>
    <Route path="/search" component={ResultsLanding} />
    {/* I SHOULD HAVE A SEPARATE FILE WITH ROUTES AND HERE JUST PUT A MAP */}
    {/* <Route exact path={basicRoutes.map etcc} */}
    {/* <Route path="/" component={Home}/> */}
  </Router>
);

export default App;
