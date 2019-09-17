import React from 'react';

import '../../assets/pure-css/forms.css';
import '../../assets/pure-css/grids.css';

function LoginForm() {
  return (
      <div className='pure-g'>
        <div className='pure-u-1-3' />
        <div className='pure-u-1-8'>
          <div className="pure-form">
          <form className="pure-form pure-form-stacked">
            <fieldset>
              <legend>A Stacked Form</legend>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Email" />
              <span className="pure-form-message">This is a required field.</span>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Password" />
              <button type="submit" className="pure-button pure-button-primary">Sign in</button>
            </fieldset>
          </form>
        </div>
        </div>
        <div className='pure-u-1-2' />
      </div>
  );
}

export default LoginForm;
