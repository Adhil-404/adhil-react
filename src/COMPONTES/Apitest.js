import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Apitest.css'
import { useParams } from 'react-router-dom';

function Apitest() {
    const [state, setstate] = useState({});
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setstate(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    console.log(state)


    return (
        <div className='product'>

            <div class="card" style={{ width: '18rem' }}>
                <img src={state.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{state.title}</h5>
                    <h5 class="card-price"> {state.price}</h5>
                    <p class="card-text">{state.description}</p>
                    <a href="#" class="btn btn-primary">add to cart</a>
                </div>
            </div>


        </div>

    )
}

export default Apitest