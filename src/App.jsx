import React from 'react'
import {useState} from 'react'
const App = ()=>{
    const [number1,setNumber1] = useState(0)
    const [number2,setNumber2] = useState(0)
    const [result,setResult] = useState(0)
    const addnumber=()=>{
        const resultdata = parseInt(number1) + parseInt(number2)
        setResult(resultdata)
    }
    return(
        <div>
           <input onChange={(e)=>setNumber1(e.target.value)} type="number" />
           <input onChange={(e)=>setNumber2(e.target.value)} type="number" />
           <button onClick={addnumber}>Add</button>
           <h1>{number1}</h1>
           <h1>{number2}</h1>
           <h1>Result:{result}</h1>
        </div>
    )
}

export default App