import React from "react"
import Login from "../pages/Login"

const LoginLink = () => {
  return (
    <div
      className="bg-[url('./assets/img/bg.png')] bg-no-repeat
     bg-cover bg-center w-full  h-[95vh] flex flex-col items-center justify-center gap-10"
    >
      <Login />
    </div>
  )
}

export default LoginLink
