import React from "react"
import EditArticle from "../pages/EditArticle"

const EditArticles = () => {
  return (
    <div
      className="bg-[url('./assets/img/bg.png')] bg-no-repeat
     bg-cover bg-center w-full  h-[95vh] flex flex-col items-center justify-center gap-10"
    >
      <div className='container flex items-center justify-center w-[250px] md:w-[500px] border-2 md:p-8 mt-8 rounded-lg  '>
        <main className=' w-100 m-auto align-items-center'>
          <div className='text-center'>
            <h1 className='fs-2 py-2'>Create article</h1>
            <EditArticle />
          </div>
        </main>
      </div>
    </div>
  )
}

export default EditArticles
