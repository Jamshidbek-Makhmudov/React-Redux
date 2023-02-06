//useSelector bu hook bolib bizga hamma statelarni olib beradi
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
//import { useSelector } from "react-redux" // bu bizga statelarni chaqirish uchun kerak
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import ArticlesLink from "./components/linkpage/Articles"
import LoginLink from "./components/linkpage/LoginLink"
import RegisterLink from "./components/linkpage/RegisterLink "
import Navbar from "./components/navbar/Navbar"
import { getArticlesStart, getArticleSuccess } from "./components/slice/article"
import { signUserSuccess } from "./components/slice/auth"
import { getItem } from "./helper/persistanceStorage"
import ArticleService from "./service/article"
import authService from "./service/authService"

const App = () => {
  const dispatch = useDispatch()
  const getUser = async () => {
    try {
      const response = await authService.getUser()
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log(error)
    }
  }
  const getArticles = async () => {
    dispatch(getArticlesStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(getArticleSuccess(response.articles))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const token = getItem("token")
    if (token) {
      getUser()
    }
    getArticles()
  }, [])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/loginLink' element={<LoginLink />} />
        <Route path='/registerLink' element={<RegisterLink />} />
        <Route path='/articlesLink' element={<ArticlesLink />} />
        <Route path='/' element={<Navigate to={"/home"} />} />
        <Route path='*' element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
