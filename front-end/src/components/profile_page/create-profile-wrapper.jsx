import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from "../loader";
import NotificationDialog from "../shared-notification-dialog";
import { createUser } from "../../actions/users-actions";

import ProfilePage from "./profile-page";

const CreateProfile = ({history }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
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
    if(!values.password || values.password.length === 0 ) {
      delete values.password;
    }
    try {
      await dispatch(createUser(values));
      resetForm({});
      handleClickOpen();
      setStatus({success: true});
    } catch (e) {
      setStatus({ success: false });
    }
  }
  return (
    <div>
      <h2>Профіль / створення </h2>
      <Loading watchers={['userReducer']} />
      <ProfilePage onSubmit={onSubmitHandler} />
      <NotificationDialog
        open={open}
        handleClose={handleClose}
        positiveHandler={() => {setOpen(false); history.push('/admin/users')}}
        positiveTitle='Активувати'
        negativeTitle='Створити ще'
        negativeHandler={() => setOpen(false)}
        text="Для того щоб дозволити щойно доданому юзеру користуватіся сістемою потрібно його активувати на сторінке керування користувачами."
        title="Профіль користувача створено!"
      />
    </div>
  );
}

export default withRouter(CreateProfile);
