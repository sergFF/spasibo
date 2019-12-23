import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Dialog from './dialog';
import { errorSelector } from './selectors';
import { unRegisterError } from '../../actions/error-handlig-actions';

const ErrorHandlingDialog = () => {
  const error = useSelector(state => errorSelector(state));
  const dispatch = useDispatch();
  const message = error ? error.e.message : null;
  const handleClose = () => {
    dispatch(unRegisterError(error.id));
  };

  return <Dialog open={error !== null} description={message} title={'Виникла помилка'} handleClose={handleClose} />;
}

export default memo(ErrorHandlingDialog);
