import axios from 'axios'
import React, { useState } from 'react'


function Formhandling_apipost() {
    const [State, setState] = useState({
        fname: '',
        useremail: '',
        radio: '',
        number: '',
        range: '',
        mob: '',
        dateofbirth: '',
        utime: ''
    })

    const change = (e) => {
        setState({ ...State, [e.target.name]: e.target.value })
    }
    // console.log(State)

    const click = (e) => {
        e.preventDefault();
        console.log(State)
        axios.post('https://jsonplaceholder.typicode.com/posts', State)
            .then((res) => {
                console.log(res)
                setState(res.data)
                if (res.status === 201) {
                    alert('submitted successfully')

                } else {
                    console.log('error')

                }
            })
            .catch((err) => {
                console.log(err)
            })
        console.log(State)


    }






    return (
        <div>

            <form>
                <label For=''>Name</label>
                <input type='text' placeholder='enter name' onChange={change} name='fname'></input><br/>
                <label For=''>email</label>
                <input type='email' placeholder='enter email' onChange={change} name='useremail'></input><br/>
                <label For=''>radio</label>
                <input type='radio' placeholder='enter' onChange={change} name='uradio'></input><br/>
                <label For=''>password</label>
                <input type='password' placeholder='enter password' onChange={change} name='upassword'></input><br/>
                <label For=''>number</label>
                <input type='number' placeholder='enter number' onChange={change} name='number'></input><br/>
                <label For=''>range</label>
                <input type='range' placeholder='set range' onChange={change} name='range'></input><br/>
                <label For=''>mobile number</label>
                <input type='tel' placeholder='enter number' onChange={change} name='mob'></input><br/>
                <label For=''>dateofbirth</label>
                <input type='date' placeholder='dob' onChange={change} name='dateofbirth'></input><br/>
                <label For=''>time</label>
                <input type='time' placeholder='time' onChange={change} name='utime'></input><br/>
            </form>

            <button type='submit' onClick={click}>submit</button>
        </div>
    )
}

export default Formhandling_apipost