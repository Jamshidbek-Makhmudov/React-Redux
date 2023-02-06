import React from "react"
import CreateArticle from "../pages/CreateArticle"

const CreateArticles = () => {
  return (
    <div
      className="bg-[url('./assets/img/bg.png')] bg-no-repeat
     bg-cover bg-center w-full  h-[95vh] flex flex-col items-center justify-center gap-10"
    >
      <CreateArticle />
    </div>
  )
}

export default CreateArticles
