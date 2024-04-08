import { getProductsFromStripe } from "../Products";
import Product from "../components/Product";
import { useState, useEffect } from "react";

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsFromStripe().then((arrayProducts) => {
      setProducts(arrayProducts);
    });
  }, []);

  return (
    <div>
      <h1 className="mt-3">Beli Store</h1>
      <div className="row g-4 mt-2 mb-4">
        {products.map((product, index) => (
          <div className="col-md-4" key={index}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;