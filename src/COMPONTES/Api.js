import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Api.css';

function Api() {
    const [state, setState] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/1')
            .then((res) => {
                setState(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    
    return (
        <div className="product-container">
            <h2>Product Details</h2>
            <img src={state?.image} alt={state?.title} />
            <p className="title">Title: {state?.title}</p>
            <p className="price">Price: ${state?.price}</p>
            <p className="description">Description: {state?.description}</p>
        </div>
    );
}

export default Api;
