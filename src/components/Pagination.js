import React,{useState} from 'react'

function Pagination({pageProp,previous,next}) {

 // const [pageN,setPage] = useState(1);
  return (
    <div className='flex justify-center mb-8'>
        <button className='p-2 font-bold border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl'onClick={previous}>Previous</button> 
        <button className='p-2 font-bold border-2 border-indigo-500 text-indigo-500 bg-gray-300'>{pageProp}</button>
        <button className='p-2 font-bold border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl'onClick={next}>
        Next</button>
    </div>
  )
}

export default Pagination