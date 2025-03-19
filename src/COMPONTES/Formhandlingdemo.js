import React, { useState } from 'react'

function Formhandlingdemo() {
    const[State,setState]=useState({fname:'', useremail:'',userpassword:''})

    const change=(e)=>{
        setState({...State,[e.target.name]:e.target.value})
    }
console.log(State)
  return (
    <div>
<input type='text' placeholder='enter first name' name='fname' onChange={change}></input>
<input type='email' placeholder='enter email' name='useremail' onChange={change}></input>
<input type='password' placeholder='enterpassword' name='userpassword' onChange={change}></input>

    </div>
  )
}

export default Formhandlingdemo

