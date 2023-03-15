import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl} from '../constants/constants'


function Banner() {
  const [movie,setMovie] = useState()
    
  // useEffect(()=>{
  //   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
  //     console.log(response.data.results[0])
  //     setMovie(response.data.results[16])
  //   })
  // },[])

  //for random datas from the array
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const movies = response.data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];
      setMovie(randomMovie);
    })
  }, []);


  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner-buttons'>
               <button className='button'>play</button>
               <button className='button'>My list</button>
            </div>
            <div className='description'>
             <h2>{movie ? movie.overview : ""}</h2>
            </div>
        </div>
        <div className='fade_bottom'>
            </div>
    </div>
  )
}

export default Banner