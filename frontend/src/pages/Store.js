import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import { getProductsFromStripe } from "../Products";
import Navbar from "../components/Navbar";
import { useAuth } from "../firebase/AuthContext";
import Navbar2 from "../components/Navbar2";



function Store() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const auth = useAuth();

  const {displayName} = auth.user;

  const handleGoogle = (e) => {
      e.preventDefault();
      auth.loginWithGoogle();
  };
  const handleLogout = (e) => {
      e.preventDefault();
      auth.logout();
  };

  useEffect(() => {
    getProductsFromStripe().then((arrayProducts) => {
      setProducts(arrayProducts);
      setFilteredProducts(arrayProducts);
    });
  }, []);

  const handleSearchChange = (searchTerm) => {
    if(searchTerm.length === 0){
      setFilteredProducts(products);
      setNoResults(false);
      return;
    }
    const filtered = products.filter((product) =>
      product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setNoResults(filtered.length === 0);
  };

  return (
<>
{displayName ? (
    <div>
      <Navbar onSearchChange={handleSearchChange} handleLogout={handleLogout} />
      <div className="container" style={{ paddingTop: "3rem" }}>
        <h1 className="mt-3"></h1>
        <div className="row g-4 mt-2 mb-4">{filteredProducts.length > 0? (
            filteredProducts.map((product, index) => (
              <div className="col-md-4" key={index}>
                <Product product={product} />
              </div>
            ))
          ) : (
            <div className="col-md-12 text-center">
              <h2>No se encontró</h2>
            </div>
          )}
        </div>
      </div>
    </div>
) : (
  <div>
    <Navbar2 handleGoogle={handleGoogle} handleLogout={handleLogout}/>
  </div>
)}
    </>
  );
}

export default Store;