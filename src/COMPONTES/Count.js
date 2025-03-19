import React, { useEffect, useState } from 'react'

function Count() {

    const [State, setState] = useState(0)
    const adition = () => {
        setState(State + 1);

    }
    const subtraction = () => {
        setState(State - 1);

    }
    console.log("loading")

    useEffect(() => {
        console.log('mounting')
    }, [])


    const [count, setCOunt] = useState(0)

    const addone = () => {
        setCOunt(count + 1);

    }
    const subone = () => {
        setCOunt(count - 1);
    }


    useEffect(() => {
        console.log('updating')
    }, [count])



    return (
        <div>

            <button onClick={adition}>+click</button>
            <h1>{State}</h1>
            <button onClick={subtraction}>-click</button>
            <br></br>
            <button onClick={addone}>+add</button>
            <h1>{count}</h1>
            <button onClick={subone}>-add</button>

        </div>
    )
}


export default Count