import React from 'react';
import { Link } from 'react-router-dom';

function Candy() {
  return (
    <div>
      <h1>Candy</h1>
      <p>Sweet and delicious!</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Candy;
