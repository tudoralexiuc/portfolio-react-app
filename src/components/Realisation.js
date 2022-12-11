import React from 'react';
import { Link } from 'react-router-dom';

export default function Realisation() {
  return (
    <>
      <div className="backButton">
        <Link to="/">
          <button>back</button>
        </Link>
      </div>
      <div>proof of concepts</div>
    </>
  );
}
