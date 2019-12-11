import React from 'react';
import {BrowserRouter as Router, NavLink, Redirect, Switch, Route} from "react-router-dom";
import LoginForm from "../login-form/login-form";
import ClientContainer from './client-container';
import AdminContainer from "../admin-container/admin-container";

const ClientRouter= ({children}) => (
  <ClientContainer>
    <div>
      <NavLink to={'/client-app/login'} > Login </NavLink>
    </div>
    <Switch>
      <Route exac path="/client-app/login" component={LoginForm} />
    </Switch>
  </ClientContainer>
);

export default ClientRouter
