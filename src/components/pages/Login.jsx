import React, { useEffect, useState } from "react"
import Input from "../generics/Input"
import { useSelector, useDispatch } from "react-redux"
import { signUserStart, signUserSuccess, signUserFailure } from "../slice/auth"
import Snipper from "../generics/Snipper"
import authService from "../../service/authService"
import ValidationError from "../errors/ValidationError"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const { isLoading, loggedIn } = useSelector((state) => state.auth) // auth orniga distrubtizatsiya qilib dispatch ichida
  const navigate = useNavigate() // bu hookimiz user login qilgandan keyin uni boshqa sahifaga jonatib yuborish uchun keran
  // yozib qoysak boladi.
  const loginHandler = async (e) => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = { email, password }
    try {
      const response = await authService.userLogin(user)
      dispatch(signUserSuccess(response.user))
      navigate("/")
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors))
    }
  }
  useEffect(() => {
    //bu useEffect biz foydalanuchi register va login qilganidan keyin yana qayta osha pagelarga otaolasligi uchun ishlatamiz
    if (loggedIn) {
      navigate("/articlesLink")
    }
  }, [loggedIn])

  return (
    <div className='container flex w-[250px] md:w-[500px] border-2 md:p-8 mt-8 rounded-lg bg-[whitesmoke] '>
      <main className='form-signin w-100 m-auto align-items-center'>
        <form>
          <h1 className='h3 mb-3 mt-4 fw-normal'>Please sign in</h1>
          <ValidationError />
          <Input state={email} setState={setEmail} label={"Email address"} />
          <Input
            state={password}
            type='password'
            setState={setPassword}
            label={"Password"}
          />

          {/* <div className='checkbox mb-3 mt-4'>
            <label>
              <input type='checkbox' value='remember-me' /> Remember me
            </label>
          </div> */}
          <button
            className='w-100 btn btn-lg btn-primary text-black mt-2'
            type='submit'
            onClick={loginHandler}
            disabled={isLoading}
          >
            {isLoading ? <Snipper /> : "Login"}
          </button>
          <p className='mt-5 mb-3 text-muted'>© 2022–2023</p>
        </form>
      </main>
    </div>
  )
}

export default Login
