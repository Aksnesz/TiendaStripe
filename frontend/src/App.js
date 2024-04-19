import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import CartProvider from "./Cart";
import { AuthProvider } from "./firebase/AuthContext";
import FormsFirebase from './components/formularioAuth';



function App() {
  return (
    <div>
      <AuthProvider>
      <CartProvider>
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Store />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
            </Routes>
          </BrowserRouter>
        </div>
      </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
