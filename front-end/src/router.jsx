import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import App from './App.jsx';
import LoginForm from './components/login-form/login-form';
import ReportPage from './components/report-page/report-page';
import ReportForm from './components/report-form/report-form';
import HeroForm from './components/hero-form/hero-form';
import ClientSide from './components/client-container/';
import AdminSide from './components/admin-container/';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App>
      <Switch>
        <Route exac path="/admin" component={AdminSide} />
        <Route exac path="/client-app" component={ClientSide} />
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
