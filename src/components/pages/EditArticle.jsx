import React, { useEffect, useState } from "react"
import Input from "../generics/Input"
import TextArea from "../generics/TextArea"
import ArticleService from "../../service/article"
import { useDispatch, useSelector } from "react-redux"
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
  postArticleFailure,
  postArticleStart,
  postArticleSuccess,
} from "../slice/article"
import Snipper from "../generics/Snipper"
import { useNavigate, useParams } from "react-router-dom"

const EditArticle = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [body, setBody] = useState("")
  const dispatch = useDispatch()
  const { slug } = useParams()
  const navigate = useNavigate()

  const { isLoading } = useSelector((state) => state.article)
  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart())
      try {
        const response = await ArticleService.getArticleDetail(slug)
        setTitle(response.article.title)
        setDescription(response.article.description)
        setBody(response.article.body)
        dispatch(getArticleDetailSuccess(response.article))
      } catch (error) {
        dispatch(getArticleDetailFailure())
      }
    }

    getArticleDetail()
  }, [])
  const formSubmit = async (e) => {
    e.preventDefault()
    const article = { title, description, body }
    dispatch(postArticleStart())
    try {
      await ArticleService.editArticle(slug, article)
      dispatch(postArticleSuccess())
      navigate("/articlesLink")
    } catch (error) {
      dispatch(postArticleFailure())
    }
  }
  return (
    <div>
      <form onSubmit={formSubmit} className='flex flex-col gap-2'>
        <Input
          className='mt-8'
          label={"Title"}
          state={title}
          setState={setTitle}
        />
        <TextArea
          className='mt-2'
          label={"Description"}
          state={description}
          setState={setDescription}
        />
        <TextArea
          label={"Body"}
          state={body}
          setState={setBody}
          height={"300px"}
        />
        <button
          className='w-100 btn btn-lg btn-primary my-2'
          type='submit'
          disabled={isLoading}
        >
          {isLoading ? <Snipper /> : "Edit"}
        </button>
      </form>
    </div>
  )
}

export default EditArticle
