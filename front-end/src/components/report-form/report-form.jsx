import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import '../../assets/pure-css/grids.css';

const RenderTextField = ({
                     label,
                     input,
                     meta: { touched, invalid, error },
                     ...custom
                   }) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const ReportForm = props => {
  const { pristine, submitting } = props;
  return (
    <form onSubmit={e => console.log(e)}>
        <div>
          <Field
            name="firstName"
            component={RenderTextField}
            label="First Name"
          />
        </div>
          <div>
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
            <button type="button" disabled={pristine || submitting}>
              Clear Values
            </button>
          </div>
        </form>
    )
}

export default reduxForm({
  form: 'ReportForm'
})(ReportForm)

