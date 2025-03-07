import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
const Update = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    // Fetch Product Data

    // Run once on component mount
    useEffect(() => {
         const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3030/api/product/edit/${id}`);
                const data = await response.json();
                setTitle(data.title);
                setDescription(data.description);
                setPrice(data.price);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, [id]);

    // Handle Form Submission
   const formHandle = async (e) => {
    e.preventDefault();
    const student = {
        title,
        description,
        price
    };

    try {
        const response = await fetch(`https://679e2303946b0e23c062a743.mockapi.io/products/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json", // Fix typo here
            },
            body: JSON.stringify(student),
        });

        if (!response.ok) {
            throw new Error(`Failed to update: ${response.statusText}`);
        }
         Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product Update Succesfully",
            showConfirmButton: false,
            timer: 1500
        });
        const result = await response.json();
        console.log("Data Updated Successfully", result);
    } catch (error) {
        console.error("Error updating product:", error);
    }
};

    return (
        <div>
            <div className="container mt-3">
                <form onSubmit={formHandle} encType="multipart/form-data">
                    <div className="card">
                        <div className="card-header">
                            <i className="fa fa-plus-circle"></i> Update Product
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
                                />
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
                            <button type="submit" className="btn btn-success btn-sm float-end">
                                <i className="fa fa-save"></i> Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
