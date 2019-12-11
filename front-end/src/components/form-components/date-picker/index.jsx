import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {FormControlLabel, Switch} from '@material-ui/core';
import  shortid from 'shortid';
import React from 'react';


const RenderDatePicker = ({
                            label,
                            input,
                            meta: { touched, invalid, error },
                            ...custom
                          }) => (<MuiPickersUtilsProvider utils={DateFnsUtils}>
  <KeyboardDatePicker
    autoOk
    format='MM/dd/yyyy'
    margin="normal"
    id={shortid.generate()}
    label={label}
    value={input.value || null}
    onChange={input.onChange}
    variant="inline"
    error={touched && invalid}
    helperText={touched && error}
    KeyboardButtonProps={{
      'aria-label': 'change date',
    }}
  />
</MuiPickersUtilsProvider>);

const RenderSwitch = ({
                        label,
                        input,
                        meta: { touched, invalid, error },
                        ...custom
                      }) => (
  <FormControlLabel
    control={<Switch
      checked={input.value ? true : false}
      inputProps={{ 'aria-label': 'primary checkbox' }}
      onChange={input.onChange}
    />}
    label={label}
  />
);

export default RenderDatePicker;
