import React from 'react'
import NETFLIX_NAV from './NETFLIX_NAV'
import MAIN from './MAIN'

function Login({name}) {
    


    if (name=='logout') {
        return (
            <div>
                <NETFLIX_NAV />
            </div>
        )


    } else {
        return (
            <div>
                <MAIN />
            </div>
        )

    }

}

export default Login