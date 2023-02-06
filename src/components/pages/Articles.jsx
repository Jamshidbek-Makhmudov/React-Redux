import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import card from "../../assets/img/card.png"
import Snipper from "../generics/Snipper"

const Articles = () => {
  const { articles, isLoading } = useSelector((state) => state.article) // bu yerdagi article bu articleSliceni ichidagi namedan keladi {artciles} esa
  //initialState dagi article hisoblanadi
  const navigate = useNavigate()
  return (
    <div className=''>
      <div className='flex w-full justify-center'>
        {isLoading && <Snipper />}
      </div>
      <div className='px-14  '>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3  '>
          {articles.map((item) => (
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
                    <button
                      type='button'
                      className='btn btn-sm btn-outline-secondary'
                    >
                      Edit
                    </button>
                    <button
                      type='button'
                      className='btn btn-sm btn-outline-danger'
                    >
                      Delete
                    </button>
                  </div>
                  <small className='text-muted font-bold capitalize'>
                    {item.author.username}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles
