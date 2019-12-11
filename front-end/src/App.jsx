import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './assets/pure-css/grids.css';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
    marginTop: '20px',
    height: 'calc(100VH - 80px)'
  },
}));

function App({children}) {
  const classes = useStyles();
  return (
  <Grid container spacing={1} className='main-container'>
    <Grid item xs={1}/>
    <Grid item xs={10} >
        {children}
    </Grid>
    <Grid item xs={1}/>
  </Grid>
  );
}

export default App;
