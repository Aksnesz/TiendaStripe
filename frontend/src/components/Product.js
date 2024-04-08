import { Cart } from "../Cart";
import { useContext } from "react";

function Product(props) {
  const { product } = props;
  const cart = useContext(Cart);
  const quantity = cart.getQuantity(product.id);

  return (
    <div className="card mb-2 h-100 border border-2 p-3">
      <img
        src={product.image}
        className="cardImage img-fluid"
        alt={product.name}
        style={{ maxHeight: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column p-3">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}$</p>
        {quantity > 0? (
          <div className="row mt-auto">
            <div className="row m-auto">
              <div className="col-6">In cart: {quantity}</div>
              <div className="col-6 d-flex justify-content-center">
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => cart.addItem(product.id)}
                >
                  +
                </button>
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={() => cart.removeItem(product.id)}
                >
                  -
                </button>
              </div>
              <button
                type="button"
                className="btn btn-danger w-75 mt-4 m-auto"
                onClick={() => cart.deleteItem(product.id)}
              >
                Remove from cart
              </button>
            </div>
          </div>
        ) : (
          <button
            className="btn btn-warning mt-auto"
            onClick={() => cart.addItem(product.id)}
          >
            Añadir al carrito
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;