import { Cart } from "../Cart";
import { useContext, useState, useEffect } from "react";
import { getProductData } from "../Products";

function CartProduct(props) {
  const cart = useContext(Cart);
  const id = props.id;
  const quantity = props.quantity;

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      const data = await getProductData(id);
      setProductData(data);
    };

    fetchProductData();
  }, [id]);

  if (!productData) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h5 className="" style={{color: "blue"}}>
        {productData.name}
      </h5>
      <h6>
        Cantidad: {quantity}
      </h6>
      <p>
      {(quantity * productData.price).toFixed(2).toString().replace(".", ",").replace(/\,00/,'')} mxn
      </p>
      <button className="btn btn-danger" onClick={() => cart.deleteItem(id)}>
        Eliminar
      </button>
      <hr />
    </div>
  );
}

export default CartProduct