const Home = () => {
    return (
        <div>
            <div className="p-5 mb-4 bg-info text-white">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Welcome to Asadmukhtar.store</h1>
                    <p className="fs-4">Discover the best deals on quality products today!</p>
                    <a href="/products" className="btn btn-light btn-lg">
                        Shop Now <i className="fa fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            <section className="features-section py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Why Shop With Us?</h2>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <i className="fa fa-truck fa-3x text-info mb-3"></i>
                            <h4>Fast Shipping</h4>
                            <p>We deliver your products swiftly to your doorstep.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fa fa-tags fa-3x text-info mb-3"></i>
                            <h4>Best Prices</h4>
                            <p>Get the best deals on top-quality products.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fa fa-thumbs-up fa-3x text-info mb-3"></i>
                            <h4>Top Quality</h4>
                            <p>We ensure you get only the best products available.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="products-section py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Featured Products</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img
                                    src="https://via.placeholder.com/300"
                                    alt="Product 1"
                                    className="card-img-top"
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Product 1</h5>
                                    <p className="card-text">$50</p>
                                    <a href="/product/1" className="btn btn-info">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img
                                    src="https://via.placeholder.com/300"
                                    alt="Product 2"
                                    className="card-img-top"
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Product 2</h5>
                                    <p className="card-text">$75</p>
                                    <a href="/product/2" className="btn btn-info">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img
                                    src="https://via.placeholder.com/300"
                                    alt="Product 3"
                                    className="card-img-top"
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Product 3</h5>
                                    <p className="card-text">$100</p>
                                    <a href="/product/3" className="btn btn-info">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
