import React from 'react';
import { useEffect, useState } from 'react';
export default function Products() {
  const [products,setProducts] = useState([]);
  const fetchproducts = async () => {
    try {
      const response = await fetch("https://678a5a52dd587da7ac29c71b.mockapi.io/products/products");
      const result   = await response.json(); 
      setProducts(result);
    } catch(error) {
      console.log("Getting Error In Products",error);
    }
  }
  useEffect(function(){
    fetchproducts();
  });
  return (
    <div>
       <div className="products-page">
          <div className='jumbotron bg-info border-2 border-top border-success'>
            <div className='container-fluid pt-5 pb-3'>
              <h4 className="mb-0">
                      <i className="fa fa-desktop"></i> Products
                </h4>
                <p className="fs-5">
                      Explore our carefully curated selection of high-quality products. Whether you're looking for the perfect 
                      addition to your home or a thoughtful gift, we have something for everyone.
                </p>
            </div>
          </div>
          <div className='container-fluid'>
          <div className="row mt-4">
                {/* Product 1 */}
                <div className="col-md-3">
                  <div className="card">
                    <img
                      src={`https://loremflickr.com/cache/resized/defaultImage.small_640_480_nofilter.jpg`}
                      alt="Product 1"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Product 1</h5>
                      <p className="card-text">$50</p>
                      <a href="/product/1" className="btn btn-info">
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
