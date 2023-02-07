import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ArticleService from "../../service/article"
import card from "../../assets/img/card.png"

const ArticleCard = ({ item, getArticles }) => {
  //bu yerda props qilib jonatmayabsan olyabsan
  const { loggedIn, user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const deleteArticle = async (slug) => {
    try {
      await ArticleService.deleteArticle(slug)
      getArticles()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='col h-  ' key={item.id}>
      <div className='card shadow-sm h-100 rounded-2xl'>
        <img src={card} alt='' className='w-full p-2 ' />

        <div className='card-body'>
          <p className='card-text font-bold'>{item.title}</p>
          <p className='card-text'>{item.description}</p>
        </div>
        <div className=' card-footer bg-yellow-300 d-flex mt-2 justify-content-between align-items-center'>
          <div className='btn-group '>
            <button
              onClick={() => navigate(`/details/${item.slug}`)}
              type='button'
              className='btn btn-sm btn-outline-success'
            >
              View
            </button>
            {loggedIn && user.username === item.author.username && (
              <>
                <button
                  type='button'
                  className='btn btn-sm btn-outline-secondary'
                  onClick={() => navigate(`/edit/${item.slug}`)}
                >
                  Edit
                </button>
                <button
                  type='button'
                  className='btn btn-sm btn-outline-danger'
                  onClick={() => deleteArticle(item.slug)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
          <small className='text-muted font-bold capitalize'>
            {item.author.username}
          </small>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
