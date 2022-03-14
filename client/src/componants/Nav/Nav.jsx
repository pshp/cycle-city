import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Login from '../UserForm/Login';
import Logout from '../Logout/Logout';
import Map from '../Map/Map';
import Register from '../UserForm/Register';

export default function Nav() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Map</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
          <li>
            <Link to="/logout">logout</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route exact path="/">
            <Map />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
