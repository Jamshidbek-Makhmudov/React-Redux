import React from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='flex bg-yellow-300 h-[70px] py-2 px-14 items-center justify-between'>
      <Link to='/' className='hover:opacity-75 hover:ease-in hover:scale-105'>
        <h3 className='italic text--2xl'>Jamshid</h3>
      </Link>
      <div className='flex  items-center gap-6 '>
        <Link
          to='loginLink '
          className='hover:opacity-75 hover:ease-in hover:scale-105'
        >
          <button>Login</button>
        </Link>
        <Link
          to='registerLink'
          className='hover:opacity-75 hover:ease-in hover:scale-105'
        >
          <button>Register</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
