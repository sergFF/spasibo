import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import EditForm from './edit-profile-form';

import { updateUser } from "../../actions/login-action";

const ProfilePage = ({ userEntity }) => {
  const dispatch = useDispatch();
  if (userEntity && userEntity.id === null) {
    return null;
  }
  return (
    <div>
    <h2>Профіль / редагування</h2>
    <Formik
      initialValues={userEntity}
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
        if (userEntity.passwordChange && !values.password) {
          errors.password = 'Обов`язкове';
        } else if (values.password !== values.password_2) {
          errors.password_2 = 'Введені паролі відрізняються!'
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        delete values.password_2;
        if(!values.password || values.password.length === 0 ) {
          delete values.password;
        }
        dispatch(updateUser(values, userEntity.id))
          .then(() => setSubmitting(false));
      }}>
      {EditForm}
    </Formik>
    </div>
  );
}

export default ProfilePage;
