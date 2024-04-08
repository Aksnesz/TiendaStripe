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
    return <div>Loading product data...</div>;
  }

  return (
    <div>
      <h5 className="" style={{color: "purple"}}>
        {productData.name}
      </h5>
      <h6>
        Quantity: {quantity}
      </h6>
      <p>
      {(quantity * productData.price).toFixed(2).toString().replace(".", ",").replace(/\,00/,'')} MXN
      </p>
      <button className="btn btn-warning" onClick={() => cart.deleteItem(id)}>
        Remove from cart
      </button>
      <hr />
    </div>
  );
}

export default CartProduct