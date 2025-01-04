import ReactDom from "react-dom/client"; // this is importing react dom ..
import { BrowserRouter } from "react-router-dom";
import Asad from "./App";
const root = ReactDom.createRoot(document.getElementById("root")); // connecting index.html with react envoivement ..
root.render(
    <BrowserRouter>
                <Asad />
    </BrowserRouter>
); // components .. 