import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import UsersTable from './table-view';
import Loader from "../loader";

import './style.scss';

const UsersEditContainer = ({ userEntity, history }) => {
  if (userEntity.role !== 'ADMIN') return null;
  return (
  <div>
    <Loader watchers={['usersList']} />
    <div className={'user-edit-container-header'}>
      <div><h2>Редагування користовачив:</h2></div>
      <div>
        <Button onClick={() => history.push('/admin/profile/create')} variant="contained">
        Створити нового
      </Button></div>
    </div>
    <UsersTable currentUser={userEntity} />
  </div>
  );
}

export default withRouter(UsersEditContainer);
