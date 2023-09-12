import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Router} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <Routes>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
  )
}

export default App

//  {/* <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1> */}