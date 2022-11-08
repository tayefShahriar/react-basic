import React from 'react'
import {useEffect} from 'react'
import About from './About'
import Axios from 'axios'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Works from './Works'
const App = ()=>{
    return(
        <div>
            <BrowserRouter>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                   </li>
                   <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/works">Work</Link>
                </li>
            </ul>
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/works" element={<Works/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App