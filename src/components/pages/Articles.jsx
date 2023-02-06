import React from "react"
import { useSelector } from "react-redux"
import card from "../../assets/img/card.png"

const Articles = () => {
  const { articles } = useSelector((state) => state.article) // bu yerdagi article bu articleSliceni ichidagi namedan keladi {artciles} esa
  //initialState dagi article hisoblanadi
  return (
    <div className=''>
      <div className='container  '>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3  '>
          {articles.map((item) => (
            <div className='col h-  ' key={item.id}>
              <div className='card shadow-sm h-100'>
                <img src={card} alt='' className='w-full ' />

                <div className='card-body'>
                  <p className='card-text font-bold'>{item.title}</p>
                  <p className='card-text'>{item.description}</p>
                  <div className='d-flex mt-2 justify-content-between align-items-center'>
                    <div className='btn-group '>
                      <button
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles
