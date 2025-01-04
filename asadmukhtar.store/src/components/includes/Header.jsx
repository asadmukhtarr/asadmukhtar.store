import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <div className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"> <i className="fa fa-truck" aria-hidden="true"></i> Asadmukhtar.store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#asadmukhtar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="asadmukhtar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"> <i className="fa fa-home"></i> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link"> <i className="fa fa-info-circle"></i> About </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link"> <i className="fa fa-desktop"></i> Products </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link"> <i className="fa fa-handshake-o"></i> Contact </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="btn btn-danger btn-sm text-white mt-2"> 
                                    <i className="fa fa-cart-plus fa-lg" aria-hidden="true"></i>
                                    <span className="badge bg-info m-1">2</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;