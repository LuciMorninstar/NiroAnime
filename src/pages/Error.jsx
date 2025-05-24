import React from 'react'
import { IoWarningOutline } from 'react-icons/io5'

const Error = () => {
  return (
  <div className ="flex flex-col  justify-center items-center gap-5 w-full h-screen">
    <IoWarningOutline className="text-red-500 bg-transparent border-none" />
    <h1 className = "text-white text-3xl font-bold">
        There is no page in this route. 
    </h1>

  </div>
  )
}

export default Error