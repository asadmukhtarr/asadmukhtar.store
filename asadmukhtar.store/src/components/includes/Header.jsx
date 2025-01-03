const Header = () => {
    return (
        <div>
            <div className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand"> <i class="fa fa-truck" aria-hidden="true"></i> Asadmukhtar.store</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#asadmukhtar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="asadmukhtar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="/" className="nav-link"> <i className="fa fa-home"></i> Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link"> <i className="fa fa-info-circle"></i> About </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link"> <i className="fa fa-desktop"></i> Products </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link"> <i className="fa fa-handshake-o"></i> Contact </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="btn btn-danger btn-sm text-white mt-2"> 
                                    <i class="fa fa-cart-plus fa-lg" aria-hidden="true"></i>
                                    <span className="badge bg-info m-1">2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;