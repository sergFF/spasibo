import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink, Redirect, withRouter } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ApplicationBar({ userName, userRole, history }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {userName && userName.length > 0 ? userName : 'Невідомій Користувач'}
          </Typography>
          <Button color="inherit" onClick={() => history.push('/admin/profile/view')}>Редагувати профіль</Button>
          <Button color="inherit" onClick={() => history.push('/admin/users')}>Керування користувачами</Button>
          <Button color="inherit" onClick={() => history.push('/admin/reports')}>Reports</Button>
          <Button color="inherit" onClick={() => history.push('/admin/add-report')}>Add report</Button>
          <Button color="inherit" onClick={() => history.push('/admin/hero-form')}>Add hero</Button>
          <Button color="inherit">Log out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(ApplicationBar);
