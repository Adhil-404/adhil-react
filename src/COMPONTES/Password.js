import React, { useState } from 'react'
// import './Password.css';

function Password() {
  const [Pass, setPass] = useState({ passw: '', cnfmpass: '' })

  const change = (e) => {
    setPass({ ...Pass, [e.target.name]: e.target.value })
  }
  const click = (e) => {
    e.preventDefault();

    if (!Pass.passw || !Pass.cnfrmpass) {

      alert("password adik");
    }

    else if (Pass.passw === Pass.cnfrmpass) {
      alert("password matching");

    } else {
      alert("not matching")
    }
    console.log(Pass)

  }
 
    const textstyle = {
      fontsize: '30px',
      color: 'blue',
      fontweight: 'bold',
    }
  


  return (
    <div>
      <form>
        <div className='mainpass'>
          <div><input type='password' placeholder='password' name='passw' onChange={change} required className='firstpass'></input></div><br></br>
          <div><input type='password' placeholder='confirm password' name='cnfmpass' onChange={change} required className='secondpass'></input></div><br></br>

          <button on onClick={click} className='submitpass' style={textstyle}>submit</button>
        </div></form>
    </div>
  )
}

export default Password