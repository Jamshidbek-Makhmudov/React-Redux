import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { removeItem } from "../../helper/persistanceStorage"
import { logoutUser } from "../slice/auth"
const Navbar = () => {
  //navigatsiya qilish ushun ya'ni userni ismini navbarga chiqarish uhun logedIn ni distruptizatsiay qilib useSelector qilib ovolamiz
  const { loggedIn, user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logoutUser())
    removeItem("token")
    navigate("/loginLink")
  }
  return (
    <div className='flex bg-yellow-300 h-[70px] py-2 px-14 items-center justify-between'>
      <Link to='/' className='hover:opacity-75 hover:ease-in hover:scale-105'>
        <h3 className='italic text--2xl'>Jamshid</h3>
      </Link>
      <div className='flex  items-center gap-6 '>
        {loggedIn ? (
          <>
            <div className=' flex items-center gap-2'>
              <i class='fa-solid fa-user'></i>
              <p className=''>{user.username}</p>
            </div>
            <Link to='/articlesLink'>
              <button className='btn btn-outline-danger'>Atricles</button>
            </Link>
            <button className='btn btn-outline-danger' onClick={logoutHandler}>
              Log out
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
