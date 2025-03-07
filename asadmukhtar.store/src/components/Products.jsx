import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Create from './Create';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true); // Initially true to show loading
  const navigate = useNavigate();

  // Fetch Products from API
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3030/api/products");
      const result = await response.json();
      setProducts(result.reverse());
      console.log(Products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoader(false); // Stop loading indicator after fetching
    }
  };

  // Delete Product
  const deleteData = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch(`https://679e2303946b0e23c062a743.mockapi.io/products/products/${id}`, {
            method: "DELETE"
          });
          fetchProducts();
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success"
          });

        } catch (error) {
          console.error("Error deleting product:", error);
        }
      }
    });
  };

  const singleProduct = (id) => navigate(`/product/${id}`);
  const updateProduct = (id) => navigate(`/update/${id}`);

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="products-page">
        <div className='jumbotron bg-info border-2 border-top border-success'>
          <div className='container-fluid pt-5 pb-3'>
            <h4 className="mb-0"><i className="fa fa-desktop"></i> Products</h4>
            <p className="fs-5">
              Explore our carefully curated selection of high-quality products. Whether you're looking for the perfect
              addition to your home or a thoughtful gift, we have something for everyone.
            </p>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-4'>
              <Create />
            </div>
            <div className='col-lg-8'>
              <div className="row mt-4">
                {loader ? (
                  <div className="d-flex justify-content-center">
                    <span className='text-danger'> <i className="fa fa-spinner fa-spin"></i> Loading...</span>
                  </div>
                ) : products.length > 0 ? (
                  products.map((product) => (
                    <div key={product.id} className="col-md-6 mt-1">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text">
                            {Math.round(product.price)} Pkr <br />
                            {product.description}
                          </p>
                          <button onClick={() => singleProduct(product._id)} className="btn btn-info btn-sm me-2">
                            View Details
                          </button>
                          <button onClick={() => updateProduct(product._id)} className="btn btn-success btn-sm me-2">
                            Edit
                          </button>
                          <button type="button" onClick={() => deleteData(product._id)} className="btn btn-sm btn-danger">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center mt-3">
                    <h5 className="text-muted">No Products Available</h5>
                  </div>
                )}
                {/* End product frontend */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
