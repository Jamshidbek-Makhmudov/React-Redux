import React from "react"
import Articles from "../pages/Articles"

const ArticlesLink = () => {
  return (
    <div
      className="bg-[url('./assets/img/bg.png')] bg-no-repeat
     bg-cover bg-center w-full  h-auto py-10 flex flex-col items-center justify-center gap-10"
    >
      <Articles />
    </div>
  )
}

export default ArticlesLink
