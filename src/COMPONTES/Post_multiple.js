import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Post_multiple() {
    const[multi,setMulti]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            setMulti(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

console.log(multi)

  return (
    <div>
        <div className='row'>
            {
                multi.map((multi)=>
                (
                    <div class="col-md-4 mb-4">
                            <div class="card" style={{ width: '18rem' }}>
                                
                                <div class="card-body">
                                    
                                    <h5 class="card-title">{multi.id}</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">{multi.title}</h6>
                                    <p class="card-text">{multi.body}</p>
                                    <Link  to={`/post/${multi.id}`} class="btn btn-primary" >view more</Link>

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

export default Post_multiple