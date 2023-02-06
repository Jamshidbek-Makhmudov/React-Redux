import { useParams } from "react-router-dom" // vu tepada local storagedagi parametrlarni olish uchun ishlatilinadi.
//bu id ni ishlatishni zor taraf bitta component ochamiz shuni ichiga navigate qilib navigate ichiga map qilayotgan itme.slug bersam hammasiniki alohida boshqa pageda ochib eradi
//id bn slugni farqi id raqamlarda tashkil topadi. slug chiroyli sozlardan
import React, { useEffect } from "react"
import ArticleService from "../../service/article"
import { useDispatch, useSelector } from "react-redux"
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/article"
import moment from "moment/moment"
import img from "../../assets/img/1.png"
import Spinner from "../generics/Snipper"

const ArticleDetails = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const { articleDetail, isLoading } = useSelector((state) => state.article)

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart())
      try {
        const response = await ArticleService.getArticleDetail(slug)
        dispatch(getArticleDetailSuccess(response.article))
      } catch (error) {
        dispatch(getArticleDetailFailure())
      }
    }

    getArticleDetail()
  }, [slug])

  return isLoading ? (
    <div className='text-center mt-6'>
      <Spinner />
    </div>
  ) : (
    articleDetail !== null && (
      <div
        className="bg-[url('./assets/img/bg.png')] bg-no-repeat
   bg-cover bg-center w-full  h-full py-6 flex items-center justify-center"
      >
        <div className='flex w-auto p-14'>
          <div
            className='p-5 mb-4 bg-light 
           rounded-lg'
          >
            <div className='py-5'>
              <h1 className='text-start fw-bold text-black'>
                {articleDetail.title}
              </h1>
              <p className='col-md-8 fs-4'>{articleDetail.description}</p>
              <p className='opacity-75'>
                {" "}
                <span className='font-bold opacity-1 '>Created at: </span>
                {moment(articleDetail.createdAt).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )}
              </p>
              {/* bu kutbxonani man browserdan yukalb oldim, moment.jsdan va npm i moment qilib yukladim */}
              <div className='w-[50%]'>
                <div className='border-2 flex flex-col md:flex-row'>
                  <div className=' p-2 '>
                    <strong className='d-inline-block mb-2 text-primary text-uppercase'>
                      {articleDetail.author.username}
                    </strong>
                    <p className=''>{articleDetail.author.bio}</p>
                  </div>
                  <div className=''>
                    <img
                      src={img}
                      alt=''
                      className='w-auto flex border-none rounded-2xl p-2'
                    />
                  </div>
                </div>
              </div>
              <div>{articleDetail.body}</div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default ArticleDetails
