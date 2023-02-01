import React from "react"
import Login from '../pages/Login'
import Register from '../pages/Register'


const Navbar = () => {
  
  return (
    <div className='flex  border-2 h-auto py-2 px-14 items-center justify-between' >
   <h3 className='italic text--2xl'>Jamshid</h3>
   <div className='flex  items-center gap-6 border-2'>

   <Login/>
   <Register/>
   </div>
    </div>
  )
}

export default Navbar
