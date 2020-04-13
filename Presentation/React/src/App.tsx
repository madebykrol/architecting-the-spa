import React from 'react';
import logo from './logo.svg';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import { routes } from './routes';

const App = () => {
  return (
    <div className="App grid-container">
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

const RouteWithSubRoutes = (route: any) => {
  return(route.exact ?
    <Route
      exact
      path={route.path}
      render={props => (
        <route.component {...props} {...route.props} rou
          tes={route.routes} />
      )} />
    :
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )} />
  );
}

export default App;
