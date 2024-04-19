import React from 'react';
import  Navbar from "../components/Navbar";


function Cancel() {
  return (
    <><Navbar /><div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h1 className="mt-3">Compra cancelada</h1>
          <a href="/" className="btn btn-warning mt-2">
            Regresar al inicio
          </a>
        </div>
      </div>
    </div></>
  );
}

export default Cancel;