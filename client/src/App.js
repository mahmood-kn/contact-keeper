import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';
import AlertState from './context/alert/AlertState';
import Alert from './components/layout/Alert';
import setAuthToken from './utility/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <BrowserRouter>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alert />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </BrowserRouter>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
