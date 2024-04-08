import React from 'react';

function Success() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h1 className="mt-3">Thanks for your purchase!</h1>
          <a href="/" className="btn btn-success mt-2">
            Back to home
          </a>
        </div>
      </div>
    </div>
  );
}

export default Success;