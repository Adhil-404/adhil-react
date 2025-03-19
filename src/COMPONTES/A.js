import React, { createContext } from 'react'
import B from './B';


const Fname = createContext();


function A() {

    return (
        <div>
            <Fname.Provider value='hello'>
                <B />
            </Fname.Provider>
        </div>
    )
}

export default A
export {Fname}