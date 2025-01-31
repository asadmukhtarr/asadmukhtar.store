import React from 'react';
import { useEffect, useState } from 'react';
import Create from './Create';
import { useNavigate } from 'react-router-dom';
export default function Products() {
  const [products,setProducts] = useState([]);
  const [loader,setloader] = useState(false);
  const navigate = useNavigate();
  const fetchproducts = async () => {
    try {
      const response = await fetch("https://678a5a52dd587da7ac29c71b.mockapi.io/products/products"); // axios ..
      const result   = await response.json(); 
      setProducts(result.reverse());
      setloader(true);
    } catch(error) {
      console.log("Getting Error In Products",error);
    }
  }
  const deleteData = (id) => {
    if(window.confirm("Are you sure?")){
      fetch("https://678a5a52dd587da7ac29c71b.mockapi.io/products/products/"+id,{
        method:"Delete"
      })
      .then(response => response.json())
      .then(data => console.log(data));
      fetchproducts();
    }
  }
  const singleProduct = (id) => {
    navigate(`/product/${id}`);
    // navigate('/product/'+id);
//    console.log('single product for',id);
  }
  const updateProduct = (id) => {
    navigate(`/update/${id}`);
  }
  // const fetchproducts = () => {
  //   fetch("https://678a5a52dd587da7ac29c71b.mockapi.io/products/products")
  //   .then(response => response.json())
  //   .then(data => console.log(data));
  // }
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
              <div className='row'>
                  <div className='col-lg-4'>
                      <Create />
                  </div>
                  <div className='col-lg-8'>
                    <div className="row mt-4">
                      {/* Product fetched */}
                      { 
                        loader ? (
                        products.map((product) => (
                          <div key={product.id} className="col-md-6 mt-1">
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">
                                  {Math.round(product.price)} Pkr <br />
                                  {product.description}
                                </p>
                                <button onClick={() => singleProduct (product.id)} className="btn btn-info btn-sm me-2">
                                  View Details
                                </button>
                                <button onClick={() => updateProduct (product.id)} className="btn btn-success btn-sm me-2">
                                  Edit
                                </button>
                                <button type="button" onClick={() => deleteData(product.id)} className="btn btn-sm btn-danger">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                        ) : (
                          <div>
                            <div className="d-flex justify-content-center" >
                              <span className='text-danger'> <i className="fa fa-spinner fa-spin"></i>  Loading...</span>
                            </div>
                          </div>
                        )
                      }
                      {/* end product frontend */}
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
}