import {FormControlLabel, Switch} from '@material-ui/core';
import React from "react";

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

export default RenderSwitch;
