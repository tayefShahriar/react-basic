import React from 'react'
import {useState} from 'react'
const App = ()=>{
        const [number, setnumber] = useState(0)
    return(
        <div>
            <button onClick={()=>setnumber(number-1)}>-</button>
            <h1>{number}</h1>
            <button onClick={()=>setnumber(number+1)}>+</button>
        </div>
    )
}

export default App