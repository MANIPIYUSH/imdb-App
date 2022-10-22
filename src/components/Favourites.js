import React,{useState} from 'react'
import Pagination from './Pagination'

function Favourites() {
  
  const [curGenere,setCurGenere] = useState("Action");

  return (
    <>
          <div className='mt-4 px-2 flex justify-center flex-wrap space-x-2 '>
         <button className={curGenere == "All Generes"?'bg-blue-400 text-lg text-white rounded-xl p-1 px-2 font-bold':'bg-gray-400 hover:bg-blue-400 text-lg text-white rounded-xl p-1 px-2 font-bold'}
        
         >All Geners</button>
         <button className={curGenere == "Action"?'bg-blue-400 text-lg text-white rounded-xl p-1 px-2 font-bold':'bg-gray-400 hover:bg-blue-400 text-lg text-white rounded-xl p-1 px-2 font-bold'}>Action</button>
         </div>
         <div className='text-center'>
          <input type="text" placeholder='Search'className='border border-2 text-center p-1 m-2'/>
          <input type="number" placeholder='Rows' className='border border-2 text-center p-1 m-2' />
         </div>

         <div className='mt-4'>
          <Pagination/>
         </div>
         
    </>
  )
}

export default Favourites