import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import {func, object} from "prop-types";

import EditForm from './edit-profile-form';
import Loading from '../loader';
import NotificationDialog from '../shared-notification-dialog';

import { updateCurrentUser } from "../../actions/users-actions";

const ProfilePage = ({ initialValues, onSubmit }) => {
  return (
      <Formik
          initialValues={initialValues}
          validateOnChange={false}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Обов`язкове';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Невірна поштова адреса';
            }
            if (!values.login){
              errors.login = 'Обов`язкове'
            }
            if (initialValues.passwordChange && !values.password) {
              errors.password = 'Обов`язкове';
            } else if (values.password !== values.password_2) {
              errors.password_2 = 'Введені паролі відрізняються!'
            }
            return errors;
          }}
          onSubmit={onSubmit}>
            {EditForm}
        </Formik>
  );
}

ProfilePage.defaultProps = {
  initialValues: {
    id: null,
    fullName: '',
    email: '',
    login: '',
    role: "USER",
    isActive: false,
    passwordChange: true,
    password: '',
    password_2: ''
  }
}

ProfilePage.propTypes = {
  userEntity: object,
  onSubmit: func.isRequired
}

export default ProfilePage;
