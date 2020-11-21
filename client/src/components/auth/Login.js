import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Login = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill the fields', 'danger');
    } else {
      console.log('Login Submit');
    }
  };

  const { email, password } = user;
  return (
    <div className='card form-container'>
      <form className='py-2' onSubmit={onSubmit}>
        <h1>
          Account <span className='text-primary'>Login</span>
        </h1>

        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>

        <input
          type='submit'
          value='Login'
          className='btn btn-block btn-primary'
        />
      </form>
    </div>
  );
};

export default Login;
