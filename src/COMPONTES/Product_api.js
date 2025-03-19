import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Product_api.css'
import Product_apimore from './Product_apimore'
import { Link } from 'react-router-dom'

function Product_api() {
    const [state, setstate] = useState([])


    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setstate(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    console.log(state)


    return (
        <div>
          
            <div className='row'>
                {
                    state.map((state) =>
                    (
                        <div class="col-md-4 mb-4">
                            <div class="card" style={{ width: '18rem' }}>
                                <img src={state.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    
                                    <h5 class="card-title">{state.title}</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">{state.price}</h6>
                                    <p class="card-text">{state.description}</p>
                                    <Link  to={`/product/${state.id}`} class="btn btn-primary" >view more</Link>

                                </div>
                            </div>
                        </div>
                    )
                    )
                }

            </div>

        </div>
    )
}

export default Product_api