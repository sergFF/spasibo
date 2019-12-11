import React from 'react';
import TextField from '@material-ui/core/TextField/TextField';

const RenderTextField = ({
                           label,
                           input,
                           meta: { touched, invalid, error },
                           ...custom
                         }) => (
  <TextField
    className='hero-field'
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    variant="outlined"
    {...input}
    {...custom}
  />
)

export default RenderTextField;
