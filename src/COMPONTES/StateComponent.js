import React, { useState } from 'react'

function StateComponent() {

    const [state, setState] = useState('hiiiii')

    const click = () => {
        setState("hellooo")
    }

    return (
        <div>
            {state}
            <button onClick={click}>login</button>

        </div>
    )
}

export default StateComponent