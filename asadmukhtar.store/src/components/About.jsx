import React, { useState } from 'react';
export default function About() {
  const [name,setName] = useState("My Name is Asad");
  const [count,setCount] = useState(0);
  const nameHandle = () => {
      setName("Faisal Khan");
  }
  let student = "Huma";
  return (
    <div className="about-page container mt-4">
      <h2 className='mt-2 mb-2'>{name}</h2> <h3>
        Counter Is : {count}
      </h3>
      <h4>Student Name : {student}</h4>
      <button className='btn btn-danger mb-2' onClick={nameHandle}>Click For Check</button>
      <button className='btn btn-warning mb-2 m-1' onClick={() => setCount(count +1)}>Count + </button>
      <button className='btn btn-warning mb-2 m-1' onClick={() => setCount(count -1)}>Count -  </button> <br />
      <input type="text" className='form-control m-2' onKeyUp={(e) =>setName(e.target.value)} />
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
