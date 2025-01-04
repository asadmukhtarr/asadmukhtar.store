import React from 'react';

export default function Cart() {
  return (
    <div className="cart-page container mt-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-info text-white">
          <h4 className="mb-0">
            <i className="fa fa-cart-plus"></i> Your Shopping Cart
          </h4>
        </div>
        <div className="card-body">
          {/* If cart is empty */}
          <div className="text-center">
            <i className="fa fa-shopping-cart fa-3x text-muted"></i>
            <p className="mt-3 fs-5 text-muted">Your cart is currently empty.</p>
            <a href="/products" className="btn btn-info">
              Start Shopping <i className="fa fa-arrow-right"></i>
            </a>
          </div>

          {/* If cart has items */}
          <div className="table-responsive mt-4">
            <table className="table table-bordered">
              <thead className="bg-light">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product 1</td>
                  <td>
                    <input
                      type="number"
                      className="form-control w-50 mx-auto"
                      defaultValue="1"
                    />
                  </td>
                  <td>$50</td>
                  <td>$50</td>
                  <td>
                    <button className="btn btn-danger btn-sm">
                      <i className="fa fa-trash"></i> Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Product 2</td>
                  <td>
                    <input
                      type="number"
                      className="form-control w-50 mx-auto"
                      defaultValue="2"
                    />
                  </td>
                  <td>$25</td>
                  <td>$50</td>
                  <td>
                    <button className="btn btn-danger btn-sm">
                      <i className="fa fa-trash"></i> Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Summary Section */}
          <div className="d-flex justify-content-end mt-4">
            <div className="card w-50 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Cart Summary</h5>
                <div className="d-flex justify-content-between">
                  <span>Subtotal:</span>
                  <span>$100</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Tax (10%):</span>
                  <span>$10</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total:</span>
                  <span>$110</span>
                </div>
                <button className="btn btn-success btn-block mt-3">
                  Proceed to Checkout <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
