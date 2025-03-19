import React, { useState } from 'react'

function Loginpage({data}) {
  

  const [State, setState] = useState("pleaselogin")

  const logout = () => {
    setState("pleaselogin")
  };
  const login = () => { 
    if (data.age<18){
      setState(`Access Denied: ${data.name}, you must be 18 or older.`);
    }else

    (setState("helloadhil"));
  }


  if (State === "pleaselogin") {
    return (
      <div>
        {State}
        <button onClick={login}>login</button>

      </div>
    );
  }
  else {
    return (
      <div>
        {State}
        <button onClick={logout}>logout</button>
      </div>
    );

  }
}

export default Loginpage