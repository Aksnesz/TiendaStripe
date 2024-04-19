import React, { useState, useContext } from "react";
import { Cart } from "../Cart";

function Product(props) {
  const { product } = props;
  const cart = useContext(Cart);
  const quantity = cart.getQuantity(product.id);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="card mb-2 h-100 border border-2 p-3">
      <div onClick={toggleModal}>
        <img
          src={product.image}
          className="cardImage img-fluid"
          alt={product.name}
          style={{ maxHeight: "200px", objectFit: "cover", cursor: "pointer" }}
        />
      </div>
      {showModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document" style={{ marginTop: "15%" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{product.name}</h5>
                <button type="button" className="close" onClick={toggleModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ textAlign: "center" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "contain" }}
                  onClick={toggleModal} // Para cerrar el modal al hacer clic en la imagen ampliada
                />
                <p>Precio: {product.price} $</p>
                <p>Descripción: {product.description}</p>
                {quantity > 0 ? (
                  <div>
                    <p>En el carrito: {quantity}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => cart.addItem(product.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => cart.removeItem(product.id)}
                    >
                      -
                    </button>
                  </div>
                ) : (
                  <button
                    className="btn btn-warning"
                    onClick={() => cart.addItem(product.id)}
                  >
                    Añadir al carrito
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Fondo sombreado */}
      {showModal && <div className="modal-backdrop fade show" onClick={toggleModal}></div>}
    </div>
  );
}

export default Product;

