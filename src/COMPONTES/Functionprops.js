import React from 'react'
import Functionprops2 from './Functionprops2';

function Functionprops() {
    const handleclick=()=>{
        alert("hello world");
    };
  return (
    <div><h1>parentcomponent</h1>

<Functionprops2 clickhere={handleclick} />
    </div>
  )
}

export default Functionprops