import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Header from "./components/includes/Header";
import Create from "./components/Create";
import Product from "./components/Product";
import Update from "./components/Update";

const App = () => {
    let title = "Asad Mukhtar";

    return (
        <div>
            <Header brand={title} />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/create-product" element={<Create />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/update/:id" element={<Update />} /> 
                </Routes>
            </div>
        </div>
    );
};

export default App;
