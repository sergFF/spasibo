import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom';
import getUser from '../../actions/login-action'

import '../../assets/pure-css/forms.css';
import '../../assets/pure-css/grids.css';

function LoginForm({ history }) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [login, setLogin] = useState({ login: null });
  const [password, setPassword] = useState({ password: null });
  const handleSendRequest = (e) => {
    e.preventDefault();
    dispatch(getUser(login, password)).then(user => {
      if (user.status) {
        alert("Authorization error");
        return;
      }
      history.push('/')
    });
  }
  return (
      <div className='pure-g'>
        <div className='pure-u-1-3' />
        <div className='pure-u-1-8'>
          <div className="pure-form">
          <form className="pure-form pure-form-stacked">
            <fieldset>
              <legend>A Stacked Form</legend>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Email" onChange={e => setLogin(e.target.value)} />
              <span className="pure-form-message">This is a required field.</span>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              <button type="" className="pure-button pure-button-primary" onClick={handleSendRequest}>Sign in</button>
            </fieldset>
          </form>
        </div>
        </div>
        <div className='pure-u-1-2' />
      </div>
  );
}

export default withRouter(LoginForm);
