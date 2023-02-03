//useSelector bu hook bolib bizga hamma statelarni olib beradi
import React from "react"
//import { useSelector } from "react-redux" // bu bizga statelarni chaqirish uchun kerak
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import LoginLink from "./components/linkpage/LoginLink"
import RegisterLink from "./components/linkpage/RegisterLink "
import Navbar from "./components/navbar/Navbar"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/loginLink' element={<LoginLink />} />
        <Route path='/registerLink' element={<RegisterLink />} />
        <Route path='/' element={<Navigate to={"/home"} />} />
        <Route path='*' element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
