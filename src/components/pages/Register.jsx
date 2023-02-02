import React, { useState } from "react"
import Input from "../generics/Input"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className='container flex w-[250px] md:w-[500px] border-2 md:p-8 mt-8 rounded-lg bg-[whitesmoke] '>
      <main className='form-signin w-100 m-auto align-items-center'>
        <form>
          <h1 className='h3 mb-3 mt-4 fw-normal'>Please sign up</h1>
          <Input state={name} setState={setName} label={"UserName"} />
          <Input state={email} setState={setEmail} label={"Email address"} />
          <Input
            state={password}
            type='password'
            setState={setPassword}
            label={"Password"}
          />

          <button
            className='w-100 btn btn-lg btn-primary text-black'
            type='submit'
          >
            Sign up
          </button>
          <p className='mt-5 mb-3 text-muted'>© 2022–2023</p>
        </form>
      </main>
    </div>
  )
}

export default Register
