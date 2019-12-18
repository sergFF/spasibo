import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import App from './App.jsx';
import ClientSide from './components/client-container/';
import AdminSide from './components/admin-container/';
import ChangePassword from "./components/change-password";


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App>
      <Switch>
        <Route exac path="/admin" component={AdminSide} />
        <Route exac path="/client-app" component={ClientSide} />
        <Route exac path="/changepassword" component={ChangePassword} />
        <Redirect exac from="/" to="/client-app" />
      </Switch>
      </App>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
