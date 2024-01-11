import React, { useEffect } from 'react'
import { Card } from 'flowbite-react';
import { Button, Spinner } from 'flowbite-react';
import {  useNavigate, useParams } from 'react-router-dom';
import { api, api_key } from '../api/api'
import { useDispatch, useSelector } from 'react-redux';
import { selectMovie } from '../redux/action/movies';

const Details = () => {

    const {movieId} =useParams();

    const dispatch =useDispatch();
    // console.log(movieId,api_key)
    //  after data yu
    const movieDetails = async() => {
        const res = await api.get(`/movie/${movieId}?api_key=${api_key}`)
        // console.log(res.data);
        dispatch(selectMovie(res.data));
    }    

    useEffect(() => {
        // movieDetails()
        if(movieId){
            movieDetails();
        }
    },[])


  let  movie = useSelector( (state)=>state.movies.movie)
//   console.log(movie);
const navigate= useNavigate()
  return (
    <div>
        {/* //link,navigate */}
        <div className='container mx-auto '>
        <div className="max-w-lg">
            {/* <Link to='/'> */}
                <span style={{'fontSize':'20px'}} onClick={()=>navigate('/')}>
                  <i className='fa-solid fa-arrow-left'></i>  Back</span>
            {/* </Link> */}
            </div>

            {
                JSON.stringify(movie) == '{}' ? (
                    <div className="text-center">
                        <div className="flex flex-row gap-3">
      <Button>
        <Spinner aria-label="Spinner button example " size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
      
    </div>
                    </div>
                )
                :  (
                    <div className="">
            <Card
                
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   <p>{movie.title}</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {movie.overview}
                   </p>
                   <div className="">
                    <span className='bg-black text-white p-3 rounded-xl'>
                       <i className='fa-solid fa-star me-2'></i> {movie.vote_average}
                    </span>
                    <span className='ms-3 bg-gray-500 text-white p-3 rounded-xl'>
                        <i className='fa-solid fa-calendar-days me-2'></i>{movie.release_date}
                    </span>
                    <span className='ms-3 bg-gray-500 text-white p-3 rounded-xl'>
                        <i className='fa-solid fa-users me-2'></i>{movie.vote_count}
                    </span>
                    <span className='ms-3 bg-gray-500 text-white p-3 rounded-xl'>
                        <i className='fa-solid fa-earth-americas me-2'></i>{movie.production_countries[0].name}
                    </span>
                   </div>
                </Card>

            </div> 
                )
            }
           
            

       
    </div>
    </div>
  )
}
 
export default Details