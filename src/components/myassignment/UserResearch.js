import React from 'react';
import { Link } from 'react-router-dom';

export default function UserResearch() {
  return (
    <>
      <div className="backButton">
        <Link to="/myassignment">
          <button>back</button>
        </Link>
      </div>
    </>
  );
}
