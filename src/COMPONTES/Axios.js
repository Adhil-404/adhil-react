import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axios() {

    const [state, setstate] = useState({});


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res)=>{
            setstate(res.data)
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }, []);
 

    console.log(state)

    return (
        <div>
            <p>loading</p>
           <p>{state.body}</p> 
        </div>
    )
}

export default Axios