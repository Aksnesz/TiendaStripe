import { useContext, useEffect, useState } from "react";
import { Cart } from "../Cart";
import CartProduct from "../components/CartProduct";
import "./Navbar.css";
import { useAuth } from "../firebase/AuthContext";


function Navbar2({ handleGoogle, handleLogout }) {
  const { user, loginWithGoogle } = useAuth();
  const cart = useContext(Cart);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchTotal = async () => {
      const total = await cart.getTotal();
      setTotal(total);
    };

    fetchTotal();
  }, [cart]);


  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        console.log(response.url);
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
        El Refugio del Guitarrista
        </a>
        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="navsesion" href="" onClick={handleGoogle}>
                
                <span className="navsesion">Iniciar sesión</span>
                <img
                  src="https://www.svgrepo.com/show/271163/google.svg"
                  alt="Iniciar sesión con Google"
                  className="boton-google"
                />
              </a>
                        </li>
                </ul>
        
                  </div>
    </nav>
  );
}

export default Navbar2;