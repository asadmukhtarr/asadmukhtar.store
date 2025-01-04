import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page container mt-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-info text-white">
          <h4 className="mb-0">
            <i className="fa fa-handshake-o"></i> Contact Us
          </h4>
        </div>
        <div className="card-body">
          <p className="fs-5">
            Have questions or need assistance? We'd love to hear from you! Fill out the form below, and we’ll get 
            back to you as soon as possible.
          </p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Enter your message here"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-info">
              Submit <i className="fa fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
