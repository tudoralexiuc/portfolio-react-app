import React from 'react';
import { Link } from 'react-router-dom';

export default function Skills() {
  return (
    <>
      <div className="backButton">
        <Link to="/">
          <button>back</button>
        </Link>
      </div>
      <div>communication</div>
      <div>reflection</div>
    </>
  );
}
