import React from 'react'
import Hero from "../banner.jpg";

function Banner() {
  return (
    <div className= {`bg-[url(${Hero})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end justify-center`}>
        <div className=' text-white text-4xl p-6 bg-gray-800 bg-opacity-50 w-full flex justify-center'>
            HalloWeen-Ends
        </div>
    </div>
  )
}

export default Banner