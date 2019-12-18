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
          id="fullName"
          fullWidth
          type="text"
          name="fullName"
          label="Повне ім`я"
          error={touched.fullName && Boolean(errors.fullName)}
          helperText = {touched.fullName ? errors.fullName : null}
          onChange={handleChange}
          value={values.fullName}
          inputProps={{
            onBlur: handleBlur,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="email"
          type="email"
          name="email"
          label="Електронна пошта"
          error={touched.email && Boolean(errors.email)}
          helperText = {touched.email ? errors.email : null}
          onChange={handleChange}
          value = {values.email}
          onBlur = {handleBlur}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="login"
          type="text"
          name="login"
          label="Логін"
          error={touched.login && Boolean(errors.login)}
          helperText = {touched.login ? errors.login : null}
          onChange={handleChange}
          value={values.login}
          inputProps={{
            onBlur: handleBlur
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="password"
          type="password"
          name="password"
          label="Пароль"
          error={touched.password && Boolean(errors.password)}
          helperText = {errors.password}
          onChange={handleChange}
          value = {values.password}
          inputProps = {{
            // onBlur: handleBlur
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
