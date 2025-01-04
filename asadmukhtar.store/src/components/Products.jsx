import React from 'react';

export default function Products() {
  return (
    <div className="products-page container mt-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-info text-white">
          <h4 className="mb-0">
            <i className="fa fa-desktop"></i> Products
          </h4>
        </div>
        <div className="card-body">
          <p className="fs-5">
            Explore our carefully curated selection of high-quality products. Whether you're looking for the perfect 
            addition to your home or a thoughtful gift, we have something for everyone.
          </p>

          <div className="row mt-4">
            {/* Product 1 */}
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

            {/* Product 2 */}
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

            {/* Product 3 */}
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
      </div>
    </div>
  );
}
