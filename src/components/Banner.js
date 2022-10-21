import React,{useState,useEffect} from 'react'
//import Hero from "../banner.jpg";
import axios from "axios";
function Banner() {

  const [movie,setMovie] = useState({});

  useEffect(function(){

     axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=878b5fb8a6ce54d0961f26b04ccd0ea1&page=1").then((res)=>{console.table(res.data.results)
      setMovie(res.data.results[1]);
    }
    )


  },[])

  return (
    <div className= {`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end justify-center`}>
        <div className=' text-white text-4xl p-6 bg-gray-800 bg-opacity-50 w-full flex justify-center'>
           {movie.title}
        </div>
    </div>
  )
}

export default Banner