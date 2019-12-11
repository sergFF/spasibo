import { Field, reduxForm } from 'redux-form';
import RenderTextField from '../../form-components/input'
import RenderDatePicker from '../../form-components/date-picker'
import {Fab, Grid, makeStyles, Paper} from "@material-ui/core";
import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";

import './collect-form.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '5px'
  },
}));

const CollectForm = ({ name, removeCollect }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Field
        name={`${name}_collect_title`}
        component={RenderTextField}
        label='Мета сбору'
        variant='standard'
        margin='dense'
      />
      <Field
        name={`${name}_collect_target`}
        component={RenderTextField}
        label='Сума сбору'
        variant='standard'
        margin='dense'
      />
      <Field
        name={`${name}_collect_deadline`}
        component={RenderDatePicker}
        label="Дата сбору"
        margin='dense'
      />
      <Fab color="secondary" style={{position: 'relative', top: '20px', left: '20px'}} aria-label="remove" onClick={removeCollect}>
        <RemoveIcon />
      </Fab>
    </Paper>
    );
}

export default CollectForm;
