import React, { useState } from 'react'

function Formhandling() {
    const [State, setState] = useState({ fname: '', useremail: '', userpassword: '' })



    const change = (e) => {
        setState({ [e.target.name]:e.target.value })
    console.log(e)
}
console.log(State)

    return (
        <div>
            <form>
                <input type='text' placeholder='enter name' onChange={change} name='fname'></input><br></br>

                <input type='email' placeholder='enter email'onChange={change} name='useremail'></input><br></br>

                <input type='password' placeholder='enterpassword'onChange={change} name='userpassword'></input><br></br>



            </form>




        </div>
    )
}

export default Formhandling