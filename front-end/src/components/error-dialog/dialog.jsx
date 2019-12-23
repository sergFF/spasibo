import React from 'react';
import { bool, func, string} from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import MUIColors from '../../MuiStyles/colors';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    // height: 48,
    // padding: '0 30px',
  },
  header: {
    backgroundColor: MUIColors.DARK_RED,
    textAlign: 'center',
    color: MUIColors.LIGHT_GREY,
    fontWeight: 'bold'
  },
  body: {
    textAlign: 'center',
    backgroundColor: MUIColors.DEEP_GREY
  }
});

export default function ErrorDialog({open, handleClose, title, description}) {
  const MUIclasses = useStyles();
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={MUIclasses.header} id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent className={MUIclasses.body}>
          <DialogContentText id="alert-dialog-description">
          {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={MUIclasses.body}>
          <Button onClick={handleClose} color="primary">
            Зрозумів
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

ErrorDialog.defaultProps = {
  open: false,
  title: 'Помилка',
  description: 'Віникла помилка'
}

ErrorDialog.propTypes = {
  open: bool,
  title: string,
  description: string,
  handleClose: func.isRequired
}
