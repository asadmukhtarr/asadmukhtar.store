import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Header from "./components/includes/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const App = () => {
    return (
       <div>
            <Header />
            <div className="container-fluid mt-2">
            <Home />
            <About />
            <Contact />
            <Products />
            <Cart />
            </div>
       </div>
    )
}
export default App;