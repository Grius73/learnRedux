import React from 'react';
import HomePage from './containers/HomePage/HomePage';
import NotFoundPage from './containers/NotFoundPage';
import FeaturePage from './containers/FeaturePage/FeaturePage';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
const App = () => (
  <Router>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/feature'>Feature</Link></li>
      <li><Link to='/ddd'>NotFound</Link></li>
    </ul>
    <Switch>
    <Route exact path='/' component={HomePage}></Route>
    <Route path='/feature' component={FeaturePage}></Route>
    <Route path='*' component={NotFoundPage} />
    </Switch>
  </Router>
  )

export default App;
