import React, { useState } from 'react';
import {Formik} from "formik";
import EditForm from './changePasswordForm';
import { Redirect, withRouter } from 'react-router-dom';
import Loader from "../loader";
import NotificationDialog from '../shared-notification-dialog'
import { useDispatch, useSelector } from "react-redux";
import {updatePassword} from "../../actions/users-actions";

const ChangePasswordForm = ({ history }) => {
  const {userData: currentUser, status} = useSelector(state => state.userReducer);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  if (status === 'PRISTINE') {
    return <Redirect to={'/client-app/login'} />
  }
  const initialValues = {
    old_password: '',
    password: '',
    password_2: ''
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = ( goAway = false ) => {
    setOpen(false);
    history.push('./admin');
  };
  const onSubmitHandler = async (val, { setSubmitting, resetForm, setStatus}) => {
    const values = {...val};
    delete values.password_2;
    try {
      await dispatch(updatePassword(values));
      resetForm({});
      handleClickOpen();
      setStatus({success: true});
    } catch (e) {
      setStatus({ success: false });
    }
  }
  return <div>
    <h2>Обов'язкова зміна паролю</h2>
    <Loader watchers={['userReducer']} />
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      validate={values => {
        const errors = {};
        if (!values.old_password){
          errors.login = 'Обов`язкове'
        }
        if (!values.password) {
          errors.password = 'Обов`язкове';
        } else if (values.password !== values.password_2) {
          errors.password_2 = 'Введені паролі відрізняються!'
        }
        return errors;
      }}
      onSubmit={onSubmitHandler}>
      {EditForm}
    </Formik>
    <NotificationDialog
      open={open}
      handleClose={handleClose}
      text="Натиснить Ок для того щоб перейті на портал."
      title="Пароль змінено!"
    />
  </div>
}

export default withRouter(ChangePasswordForm);
