import React, { useState } from 'react'
import axios from 'axios'

function Formhandling_api() {
    const [state, setstate] = useState({fname:'',email:'',Password:''})
    const change=(e)=>{
        setstate({...state,[e.target.name]:e.target.value})
    }
    // console.log(state);
    
const click=(e)=>{
    e.preventDefault();
    
    axios.post('https://jsonplaceholder.typicode.com/posts',state)
    .then((res)=>{
        console.log(res)
        setstate(res.data)
    }) 
    .catch((err)=>{
        console.log(err)
    
    })
 
    console.log(state)
}

  return (
    <div>
<form>
    <label for="" >name:</label>
    <input type='text' placeholder='enter name' onChange={change} name='fname'/><br></br>
    <label for=''>email:</label>
    <input type='email' placeholder='enter email' onChange={change} name='email'/><br></br>
    <label for=''>password:</label>
    <input type='password'placeholder='8 character' onChange={change} name='password'/><br></br>
    
</form>

<button type='submit' onClick={click}>submit</button>

    </div>
  )
}

export default Formhandling_api