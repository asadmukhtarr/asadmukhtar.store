import { useState } from "react";
const Create = () => {
    const [title,setTitle ] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState("");
    const formHandle = (event) => {
        event.preventDefault();
        const student = {
            title,
            description,
            price
        }
        fetch("https://678a5a52dd587da7ac29c71b.mockapi.io/products/products",{
            method:"POST",
            headers: {
                "Content-Type" : "applicaiton/json",
            },
            body:JSON.stringify(student),
        })
        console.log("Data saved succesfully",student);
    }
    return (
        <div>
            <div className="container mt-3">
                <div>
                    <div>
                        <form onSubmit={formHandle} encType="multipart/form-data">
                            <div className="card">
                                <div className="card-header">
                                    <i className="fa fa-plus-circle"></i> Create New Product
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label> Title {title} </label>
                                        <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label> Description {description} </label>
                                        <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} rows="5"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label> Price {price} </label>
                                        <input  type="number" onChange={(e) => setPrice(e.target.value)} className="form-control" />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-danger btn-sm float-end"> <i className="fa fa-plus-circle"></i> Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Create;