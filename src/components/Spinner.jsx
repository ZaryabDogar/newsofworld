import React from 'react'
import gif from "./gif.gif"
export default function Spinner() {
  return (
    <div className='w-full flex justify-center mt-20'>
        <img className="w-20 flex justify-center rounded-full"src={gif} alt="Lading" />
    </div>
  )
}
