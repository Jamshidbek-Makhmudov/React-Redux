import React, { useEffect, useState } from "react"
import Input from "../generics/Input"
import { useSelector, useDispatch } from "react-redux"
import { signUserStart, signUserSuccess, signUserFailure } from "../slice/auth" // slicedan keladigan function reducer gulli qavs ichida bolishi kere
//shuni togrilash uchun 1 soat vaqtim ketti
import Snipper from "../generics/Snipper"
import authService from "../../service/authService"
import ValidationError from "../errors/ValidationError"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const { isLoading, loggedIn } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const registerHandler = async (e) => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = { username: name, email, password }
    try {
      //try serverga birorta sorov yuboradi, ishlasa qoladi,xato bosa catchda ushlab olamiz
      const response = await authService.userRegister(user)
      dispatch(signUserSuccess(response.user))
      navigate("/")
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors)) // function ichidagi qavsga action.payloadimiz ni yozamiz
    }
  } // bu kodlarni professionallar reduxni oziga yozadi, buning uchun middelvaerlar kerak boladi va bu sal qiyregister
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
          <h1 className='h3 mb-3 mt-4 fw-normal'>Please sign up</h1>
          <ValidationError />
          <Input state={name} setState={setName} label={"UserName"} />
          <Input state={email} setState={setEmail} label={"Email address"} />
          <Input
            state={password}
            type='password'
            setState={setPassword}
            label={"Password"}
          />

          <button
            className='w-100 btn btn-lg btn-primary text-black mt-2'
            type='submit'
            onClick={registerHandler}
            disabled={isLoading}
          >
            {isLoading ? <Snipper /> : "Sign up"}
          </button>
          <p className='mt-5 mb-3 text-muted'>© 2022–2023</p>
        </form>
      </main>
    </div>
  )
}

export default Register
