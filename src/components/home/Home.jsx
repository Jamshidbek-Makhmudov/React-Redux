import React from 'react'

const Home = () => {
  return (
    <div className="bg-[url('./assets/img/bg.png')] bg-no-repeat
     bg-cover bg-center w-full  h-[95vh] flex flex-col items-center justify-center gap-10" >
      <h1>Join our club and
let’s grow together</h1>
<h2>Ibiza Center for Enterpreneurship (ICE) is the central place for anything
   related to enterpreneurship on the island, internationaly and online.</h2>
   <div className='flex items-center gap-6'>

   <button className='border-none rounded-lg hover:opacity-75 bg-yellow-300
    cursor-pointer w-32 h-12 font-medium' > Join now</button>
   <button className='border-none rounded-lg hover:opacity-75 bg-slate-900 text-yellow-300
    cursor-pointer w-32 h-12 font-medium' > Learn more</button>
    </div>
    </div>
  )
}

export default Home
 