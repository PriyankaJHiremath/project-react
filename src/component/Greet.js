import React from 'react'

// function Greet() {
//     return(
//         <h1>Hello Priyanka</h1>
//     )
// }

const Greet = (props) => {
    return(
        <div>
            <h1>Hello {props.name} as {props.heroName}</h1>
            {props.children}
        </div>
        )
}

export default Greet