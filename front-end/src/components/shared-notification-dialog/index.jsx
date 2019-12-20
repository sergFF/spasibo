import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {string, func, bool} from 'prop-types'
import { Link } from 'react-router-dom';

const AlertDialog = ({
  open,
  handleClose,
  title,
  text,
  positiveTitle,
  negativeTitle,
  positiveHandler,
  negativeHandler
}) => {
  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={
            () => {
              if (negativeHandler !== null) {
                negativeHandler();
              } else {
                handleClose()
              }
            }
          } >
            {negativeTitle}
          </Button>
          <Button
            onClick={
              () => {
                if (positiveHandler !== null) {
                  positiveHandler();
                } else {
                  handleClose(true)
                }
              }
            }
            color="primary" autoFocus>
            {positiveTitle}
          </Button>
        </DialogActions>
      </Dialog>
  );
}

AlertDialog.defaultProps = {
  title: 'Title',
  text: 'Description',
  open: false,
  positiveTitle: 'Ok',
  negativeTitle: 'Відміна',
  positiveHandler: null,
  negativeHandler: null
}

AlertDialog.propTypes = {
  open: bool,
  title: string,
  text: string,
  handleClose: func.isRequired,
  positiveTitle: string,
  positiveHandler: func,
  negativeTitle: string,
  negativeHandler: func
}

export default AlertDialog;
