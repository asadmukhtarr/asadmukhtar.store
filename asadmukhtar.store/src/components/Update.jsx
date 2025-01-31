import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
                const response = await fetch(`https://678a5a52dd587da7ac29c71b.mockapi.io/products/products/${id}`);
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
    const formHandle = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", { title, description, price });
        // Add your update API call here
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
