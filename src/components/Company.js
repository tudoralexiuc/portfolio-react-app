import React from 'react';
import { Link } from 'react-router-dom';

export default function Company() {
  return (
    <>
      <div className="backButton">
        <Link to="/">
          <button>back</button>
        </Link>
      </div>
      <div>wireframes</div>
      <div>prototypes</div>
    </>
  );
}
