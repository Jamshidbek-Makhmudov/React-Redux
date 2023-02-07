import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ArticleService from "../../service/article"
import Snipper from "../generics/Snipper"
import { getArticlesStart, getArticleSuccess } from "../slice/article"
import ArticleCard from "./ArticleCard"

const Articles = () => {
  const { articles, isLoading } = useSelector((state) => state.article) // bu yerdagi article bu articleSliceni ichidagi namedan keladi {artciles} esa
  //initialState dagi article hisoblanadi
  // const { loggedIn, user } = useSelector((state) => state.auth)
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  //q
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
    getArticles()
  }, [])

  return (
    <div className=''>
      <div className='flex w-full justify-center'>
        {isLoading && <Snipper />}
      </div>
      <div className='px-14  '>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3  '>
          {articles.map((item, index) => (
            <ArticleCard item={item} getArticles={getArticles} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles
