import React from "react"

import Register from "../pages/Register"

const RegisterLink = () => {
  return (
    <div
      className="bg-[url('./assets/img/bg.png')] bg-no-repeat
     bg-cover bg-center w-full  h-[95vh] flex flex-col items-center justify-center gap-10"
    >
      <Register />
    </div>
  )
}

export default RegisterLink
