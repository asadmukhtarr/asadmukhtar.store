import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Cart from "./components/Cart";
const App = () => {
    return (
       <div>
            <h2>Hello Main Component</h2>
            <Home />
            <About />
            <Contact />
            <Products />
            <Cart />
       </div>
    )
}
export default App;