import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div>
    <header>
      Login first. I need your personal information
    </header>
    <div>
      <Link to="/">Go back to the Entrance</Link>
    </div>
    <div>
      <Link to="/main">main</Link>
    </div>
    <footer>
      Be Safe!!
    </footer>
  </div>
);

export default Login;
