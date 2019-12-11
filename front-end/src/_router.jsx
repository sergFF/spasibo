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
        <div>
          <NavLink to={'/reports'} > Reports </NavLink>
          <NavLink to={'/report-form'} > Add report </NavLink>
          <NavLink to={'/hero-form'} > Add hero </NavLink>
          <NavLink to={'/login'} > Login </NavLink>
        </div>
      <Switch>
        <Route exac path="/login" component={LoginForm} />
        <Route exac path="/reports" component={ReportPage} />
        <Route exac path="/report-form" component={ReportForm} />
        <Route exac path="/hero-form" component={HeroForm} />
        <Redirect exac from="/" to="/reports" />
      </Switch>
      </App>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
