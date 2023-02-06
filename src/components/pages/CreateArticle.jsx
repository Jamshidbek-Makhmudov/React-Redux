import { useState } from "react"
import TextArea from "../generics/TextArea"
import Input from "../generics/Input"
import ArticleService from "../../service/article"
import { useDispatch, useSelector } from "react-redux"
import {
  postArticleFailure,
  postArticleStart,
  postArticleSuccess,
} from "../slice/article"
import Snipper from "../generics/Snipper"
import { useNavigate } from "react-router-dom"

const CreateArticle = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [body, setBody] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoading } = useSelector((state) => state.article)
  const formSubmit = async (e) => {
    e.preventDefault()
    const article = { title, description, body } // bular object title:tile ni qisqartirib yozdim
    dispatch(postArticleStart())
    try {
      await ArticleService.postArticle(article)
      dispatch(postArticleSuccess())
      navigate("/articlesLink")
    } catch (error) {
      dispatch(postArticleFailure())
    }
  }

  return (
    <div className='container flex items-center justify-center w-[250px] md:w-[500px] border-2 md:p-8 mt-8 rounded-lg  '>
      <main className=' w-100 m-auto align-items-center'>
        <div className='text-center'>
          <h1 className='fs-2 py-2'>Create article</h1>

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
              {isLoading ? <Snipper /> : "Create"}
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default CreateArticle
