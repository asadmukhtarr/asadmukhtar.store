import { useState } from "react";
import Swal from "sweetalert2";
const Create = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const formHandle = async (event) => {
        event.preventDefault();

        const product = { title, description, price };

        try {
            const response = await fetch("https://679e2303946b0e23c062a743.mockapi.io/products/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Fixed typo
                },
                body: JSON.stringify(product),
            });

            if (!response.ok) {
                throw new Error(`Failed to save: ${response.statusText}`);
            }

            const result = await response.json();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product Created Succesfully",
                showConfirmButton: false,
                timer: 1500
              });
            console.log("Data saved successfully", result);

            // Reset form after successful submission
            setTitle("");
            setDescription("");
            setPrice("");
        } catch (error) {
            console.error("Error saving product:", error);
        }
    };

    return (
        <div className="container mt-3">
            <form onSubmit={formHandle} encType="multipart/form-data">
                <div className="card">
                    <div className="card-header">
                        <i className="fa fa-plus-circle"></i> Create New Product
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Title</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea 
                                className="form-control" 
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)} 
                                rows="5"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input  
                                type="number" 
                                className="form-control" 
                                value={price} 
                                onChange={(e) => setPrice(e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-danger btn-sm float-end">
                            <i className="fa fa-plus-circle"></i> Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Create;
