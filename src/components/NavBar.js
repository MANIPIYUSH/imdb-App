import React from 'react'
import Logo from "../logo.png";

function NavBar() {
  return (
    <div className = "border flex space-x-8 pl-12 items-center py-4">
   <img src={Logo} alt="" />
    <div className='text-blue-400 font-bold text-2xl md:text-3xl'>Movies</div>
    <div className='text-blue-400 font-bold text-2xl md:text-3xl'>Favrioutes</div>
    </div>
  )
}

export default NavBar