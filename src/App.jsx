//useSelector bu hook bolib bizga hamma statelarni olib beradi
import React from 'react'
import { useSelector } from 'react-redux'  // bu bizga statelarni chaqirish uchun kerak
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Navigate to={"/home"}/>}/>
     <Route path='*' element={<h1>404 not found</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
