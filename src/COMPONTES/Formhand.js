import React, { useState } from 'react'

function Formhand() {

    const [State, setState] = useState({ fname: '',
         useremail: '',
          radio: '', number: '', range: '', mob: '', dateofbirth: '', utime: '' })

    const change=(e)=>{
        setState({...State,[e.target.name]:e.target.value})
    }
    // console.log(State)

    const click=(e)=>{
        e.preventDefault();
        console.log(State)
        

    }
    return (
        <div className='form'>
            <form>
                <label For=''>Name</label>
            <input type='text' placeholder='enter name' onChange={change} name='fname'></input><br></br>
            <label For=''>email</label>
            <input type='email' placeholder='enter email' onChange={change} name='useremail'></input><br></br>
            <label For=''>radio</label>
            <input type='radio' placeholder='enter' onChange={change} name='uradio'></input><br></br>
            <label For=''>password</label>
            <input type='password' placeholder='enter password' onChange={change} name='upassword'></input><br></br>
            <label For=''>number</label>
            <input type='number' placeholder='enter number' onChange={change} name='number'></input><br></br>
            <label For=''>range</label>
            <input type='range' placeholder='set range' onChange={change} name='range'></input><br></br>
            <label For=''>mobile number</label>
            <input type='tel' placeholder='enter number' onChange={change} name='mob'></input><br></br>
            <label For=''>dateofbirth</label>
            <input type='date' placeholder='dob' onChange={change} name='dateofbirth'></input><br></br>
            <label For=''>time</label>
            <input type='time' placeholder='time' onChange={change} name='utime'></input><br></br>
            </form>

<button onClick={click}>submit</button>



        </div>
    )
}

export default Formhand