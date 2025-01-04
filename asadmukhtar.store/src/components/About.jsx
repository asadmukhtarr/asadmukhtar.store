import React from 'react';

export default function About() {
  return (
    <div className="about-page container mt-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-info text-white">
          <h4 className="mb-0">
            <i className="fa fa-info-circle"></i> About Us
          </h4>
        </div>
        <div className="card-body">
          <p className="fs-5">
            In today's fast-paced world, the concept of minimalist living has gained significant attention. 
            People are increasingly seeking simplicity in their lives by focusing on what truly matters and 
            letting go of unnecessary clutter.
          </p>
          <p className="fs-5">
            At <strong>Asadmukhtar.store</strong>, we embrace this philosophy by curating a selection of high-quality, 
            essential products that bring value and joy to our customers. From home essentials to lifestyle 
            accessories, we prioritize functionality and style, ensuring you get the best of both worlds.
          </p>
          <p className="fs-5">
            Join us on this journey to simplify and enrich your life with products designed to meet your needs 
            and exceed your expectations.
          </p>
          <a href="/contact" className="btn btn-info mt-3">
            Contact Us <i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
