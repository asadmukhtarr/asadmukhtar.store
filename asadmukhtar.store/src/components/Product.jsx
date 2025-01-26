import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
const Product = () => {
    const [single,setSingle] = useState();
    const id = useParams();
    const SingleProduct = async () => {
        const response = await fetch(`https://678a5a52dd587da7ac29c71b.mockapi.io/products/products/${id.id}`);
        const data     = await response.json();
        setSingle(data);
    }
    useEffect(() => {
       SingleProduct();
    });
    return (
        <div>
            <div className="container mt-5 shadow-lg">
                <div className="card">
                    <div className="card-header">{single.title}</div>
                    <div className="card-body">
                        {single.description}
                    </div>
                    <div className="card-footer">
                        {single.price}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;