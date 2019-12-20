import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from "../loader";
import NotificationDialog from "../shared-notification-dialog";
import {updateCurrentUser} from "../../actions/users-actions";

import ProfilePage from "./profile-page";

const EditProfile = ({ userEntity, history }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  if(userEntity.id == null) {
    return null;
  }
  const handleClose = ( goAway = false ) => {
    if(goAway === true) {
      history.push('./admin');
    } else {
      setOpen(false);
    }
  };
  const initialValues = {
    ...userEntity,
    password: '',
    password_2: ''
  };

  const onSubmitHandler = async (val, { setSubmitting, resetForm, setStatus}) => {
    const values = {...val};
    delete values.password_2;
    if(!values.password || values.password.length === 0 ) {
      delete values.password;
    }
    try {
      await dispatch(updateCurrentUser(values));
      resetForm({});
      handleClickOpen();
      setStatus({success: true});
    } catch (e) {
      setStatus({ success: false });
    }
  }
  return (
    <div>
      <h2>Профіль / редагування</h2>
      <Loading watchers={['userReducer']} />
      <ProfilePage initialValues={initialValues} onSubmit={onSubmitHandler} />
      <NotificationDialog
        open={open}
        handleClose={handleClose}
        text="Редагування рофілю корістувача, зміни даних профілю."
        title="Зміни профілю успішно збережені."
        positiveTitle={'Завершити'}
        nagativeTitle={'Залишитися'}
      />
    </div>
  );
}

export default withRouter(EditProfile);
