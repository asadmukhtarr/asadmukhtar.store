import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = () => {
    const { id } = useParams(); // ✅ Correctly extract id
    const [single, setSingle] = useState(null); // ✅ Initialize as null

    useEffect(() => {
        const fetchSingleProduct = async () => {
            try {
                const response = await fetch(`https://679e2303946b0e23c062a743.mockapi.io/products/products/${id}`);
                const data = await response.json();
                setSingle(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchSingleProduct();
    }, [id]);

    // ✅ Ensure product data is available before rendering
    if (!single) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <div>
            <div className="container mt-5 shadow-lg">
                <div className="card">
                    <div className="card-header">{single.title}</div>
                    <div className="card-body">{single.description}</div>
                    <div className="card-footer">${single.price}</div>
                </div>
            </div>
        </div>
    );
};

export default Product;
