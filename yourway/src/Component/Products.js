import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Products = () => {
    const storeproductid = useParams().id;

    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/api/Products/' + storeproductid)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    return (
        <div >
            <h5 className='App'>Products List</h5>
            {
                Products.length > 0 && (
                    <div className="back" >
                        <div className="container py-5">
                            <div className="row">
                                {Products.map(item => (
                                    <div key={item.id} className="col-md-12 col-lg-4 mb-4 mb-lg-0">
                                        <div className="card text-black">
                                            <img src={'https://igimages.gumlet.io/telugu/gallery/actress/rakulpreetsingh/rakulpreet05092022_006.jpg'} className="card-img-top" alt="https://igimages.gumlet.io/telugu/gallery/actress/rakulpreetsingh/rakulpreet05092022_006.jpg" />
                                            <div className="card-body">
                                                <div className="text-center mt-1">
                                                    <h4 className="card-title">{item.ProductName}</h4>
                                                    <h6 className="text-primary mb-1 pb-3">{item.Size}</h6>
                                                </div>
                                                <div className="text-center">
                                                    <div className="d-flex flex-column mb-4">
                                                        <span className="h1 mb-0">Rs :  {item.price}</span>
                                                        <span>{item.ShortDesc}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <button type="button" className="btn btn-primary flex-fill me-1" data-mdb-ripple-color="dark" >
                                                        Add to cart
                                                    </button>
                                                    <button type="button" className="btn btn-danger flex-fill ms-1">Buy now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default Products;