import React, { useEffect } from 'react';
import {Box} from '@material-ui/core';
import {Route, Switch, Redirect, NavLink, BrowserRouter as Router} from 'react-router-dom';
import LoginForm from "../login-form/login-form";
import ReportPage from "../report-page/report-page";
import ReportForm from "../report-form/report-form";
import HeroForm from "../hero-form/hero-form";
import AdminContainer from './admin-container';
import Navigation from './navigation-menu';
import EditProfilePageWrapper from '../profile_page/edit-profile-wrapper'
import CreateProfilePageWrapper from '../profile_page/create-profile-wrapper'
import {useDispatch, useSelector} from 'react-redux';
import { refreshUser } from '../../actions/users-actions';
import UsersList from '../users-container';



const AdminRouter = ({children}) => {
  const { userData, status} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'PRISTINE') {
      dispatch(refreshUser());
    }
  });
  if (status === 'ERROR') {
    return  <Redirect to="/client-app/login" />
  }

  if (status === 'CHANGE_PASSWORD') {
    return  <Redirect to="/changepassword" />
  }
  return (
    <AdminContainer>
        <Navigation userName={userData.fullName} userRole={userData.role}/>
      <Switch>
        <Route exac path="/reports" component={ReportPage} />
        <Route exac path="/report-form" component={ReportForm} />
        <Route exac path="/admin/hero-form" component={HeroForm} />
        <Route exac path="/admin/profile/edit" render={() => <EditProfilePageWrapper userEntity={userData} />} />
        <Route exac path="/admin/profile/create" component={CreateProfilePageWrapper} />
        {userData.role === 'ADMIN'
        && <Route exac path="/admin/users" render={() => <UsersList userEntity={userData} />} />}
      </Switch>
    </AdminContainer>
  );
}

export default AdminRouter;
