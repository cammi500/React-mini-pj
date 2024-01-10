import React, { useEffect } from 'react'
import { Card } from 'flowbite-react';
import {  useNavigate, useParams } from 'react-router-dom';
import { api, api_key } from '../api/api'

const Details = () => {

    const {movieId} =useParams();
    // console.log(movieId,api_key)
    //  after data yu
    const movieDetails = async() => {
        const res = await api.get(`/movie/${movieId}?api_key=${api_key}`)
        console.log(res.data);
    }    

    useEffect(() => {
        movieDetails()
    },[])

const navigate= useNavigate()
  return (
    <div>
        {/* //link,navigate */}
        <div className='container mx-auto '>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid:cols-1 gap-4">
            {/* <Link to='/'> */}
                <span style={{'fontSize':'20px'}} onClick={()=>navigate('/')}>
                  <i className='fa-solid fa-arrow-left'></i>  Back</span>
            {/* </Link> */}
            <div className="max-w-sm">
            <Card
                
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg"
                >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                </Card>

            </div>
           
            

        </div>
    </div>
    </div>
  )
}

export default Details