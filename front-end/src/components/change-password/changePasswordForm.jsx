import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      // width: 200,
    },
  },
}));

const FormTemplate = ({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                      }) => {
  const classes = useStyles();
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="old_password"
          type="password"
          name="old_password"
          label="Старий пароль"
          error={touched.old_password && Boolean(errors.old_password)}
          helperText = {errors.old_password}
          onChange={handleChange}
          value = {values.old_password}
          inputProps = {{
            onBlur: handleBlur
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="password_2"
          type="password"
          name="password"
          label="Новий пароль"
          error={touched.password && Boolean(errors.password)}
          helperText = {touched.password ? errors.password : null}
          onChange={handleChange}
          value={values.password}
          inputProps={{
            onBlur: handleBlur
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="password_2"
          type="password"
          name="password_2"
          label="Підтрердження паролю"
          error={touched.password_2 && Boolean(errors.password_2)}
          helperText = {touched.password_2 ? errors.password_2 : null}
          onChange={handleChange}
          value={values.password_2}
          inputProps={{
            onBlur: handleBlur
          }}
        />
      </Grid>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
}

export default FormTemplate;
