import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Array_api() {
    const[array, setarray] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            setarray(res.data)

        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    console.log(array);
    


  return (
    <div>
        {
            array.map((array)=>{
                return(
                    <div>
                    <h2>user id{array.userId}</h2>
                    <h4>user:{array.id}</h4>
                    <h4>age: {array.title}</h4>
                    <h4>place:{array.body}</h4></div>
                )
            })
            
        }
    </div>
  )
}

export default Array_api