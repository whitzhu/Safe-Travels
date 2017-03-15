import React from 'react';
import { Link } from 'react-router-dom';

const entrance = () => (
  <div>
    <h1>Hello World!</h1>
    <h1>Safe Travel</h1>
    <p> want to travel safe? </p>
    <div>
      <Link to="/main">public</Link>
    </div>
    <div>
      <Link to="/login">login</Link>
    </div>
  </div>
);

export default entrance;
