import React, { useContext } from 'react'
import { Fname } from './COMPONTES/A'

function C() {
        const name=useContext(Fname)
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default C