import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import { getProductsFromStripe } from "../Products";
import Navbar from "../components/Navbar";

function Store() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProductsFromStripe().then((arrayProducts) => {
      setProducts(arrayProducts);
      setFilteredProducts(arrayProducts); 
    });
  }, []);

  
  const handleSearchChange = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Navbar onSearchChange={handleSearchChange}  />
      <div className="container"  style={{   paddingTop: "3rem"}}>
        <h1 className="mt-3"></h1>
        <div className="row g-4 mt-2 mb-4">
          {filteredProducts.map((product, index) => (
            <div className="col-md-4" key={index}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store;