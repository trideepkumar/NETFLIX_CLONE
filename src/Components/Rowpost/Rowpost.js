import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import { API_KEY , imageUrl} from '../constants/constants'
import YouTube from 'react-youtube';


function Rowpost(props) {
   
  const [movies, setmovies] = useState([])
  const [urlId,seturlId] =useState('')


  useEffect(() => {
    axios.get(props.url).then((response)=>{
       console.log(response.data)
       setmovies(response.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])

//for youtube video playing
  const opts = {
    height: '390',
    width:'100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handlemovies = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length !== 0){
        seturlId(response.data.results[0])
      }else{
        console.log('GOT VIDEO EMPTY ARRAY ')
      }
    })
  }
  


  return (
    <div>
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
              {movies.map((movies)=>
                <img onClick={()=>handlemovies(movies.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl+movies.backdrop_path}`}></img>
              )}
            </div>
          {urlId && <YouTube  opts={opts}   videoId={urlId.key}/>}  
        </div>
    </div>
  )
}

export default Rowpost