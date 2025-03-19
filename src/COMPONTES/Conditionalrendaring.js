import React from 'react'
import NETFLIX_NAV from './NETFLIX_NAV';
import MAIN from './MAIN';

function Conditionalrendaring() {
    let a = true;


    if (a) {
        return (
            <div>
                <NETFLIX_NAV />
            </div>
        )

    }
    else {
        return (
            <div>
                <MAIN />
            </div>
        )
    }

}

export default Conditionalrendaring