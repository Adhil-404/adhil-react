import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function Post_single() {
    const [single, setSingle] = useState({});
    const{id}= useParams();
    console.log(id)

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=>{
        setSingle(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
},[])
console.log(single)


  return (
    <div>
        <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">{single.id}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{single.title}</h6>
    <p class="card-text">{single.body}</p>
    <a href="#" class="btn btn-primary">post</a>
  </div>
</div>

    </div>
  )
}

export default Post_single