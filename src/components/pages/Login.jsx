import React, { useState } from "react"
import Input from "../generics/Input"
import { useSelector, useDispatch } from "react-redux"
import { loginUserStart } from "../slice/auth"
import Snipper from "../generics/Snipper"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.auth) // auth orniga distrubtizatsiya qilib dispatch ichida
  // yozib qoysak boladi.
  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(loginUserStart())
  }

  return (
    <div className='container flex w-[250px] md:w-[500px] border-2 md:p-8 mt-8 rounded-lg bg-[whitesmoke] '>
      <main className='form-signin w-100 m-auto align-items-center'>
        <form>
          <h1 className='h3 mb-3 mt-4 fw-normal'>Please sign in</h1>

          <Input state={email} setState={setEmail} label={"Email address"} />
          <Input state={password} setState={setPassword} label={"Password"} />

          <div className='checkbox mb-3 mt-4'>
            <label>
              <input type='checkbox' value='remember-me' /> Remember me
            </label>
          </div>
          <button
            className='w-100 btn btn-lg btn-primary text-black'
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
