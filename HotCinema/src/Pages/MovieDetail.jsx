import React from 'react'
import useFetchDetail from '../hook/useFetchDetail';
import { useTitle } from '../hook/useTitle';
import Backup from "../assets/images/backup.png";
import { useState,useEffect } from 'react';
const MovieDetail = ({apiPath}) => {
  const {data:movies }=useFetchDetail({apiPath});
  console.log("dt",apiPath)
  const pageTitle = useTitle(movies.title);
  console.log("movie idp",movies.id);
  useEffect(()=>{
    document.title=`${movies.title}`;
  },[]);
 
  const image = movies.poster_path ? `https://image.tmdb.org/t/p/w500/${movies.poster_path}` : Backup ;
 // video preview 
  const [videoKey, setVideoKey] = useState('');
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchVideo = () => {
    console.log("videop.",movies.id)
    fetch(`https://api.themoviedb.org/3/movie/${movies.id}/videos?api_key=4f7b1fc43891c9dbe160c20bb8b2470e`)
          .then(response => response.json())
          .then(data => {
              if (data.results && data.results.length > 0) {
                  setVideoKey(data.results[0].key);
                  setIsLoaded(true);
              } else {
                  setError('No video results found.');
              }
          })
          .catch(error => {
              console.error('Error fetching data:', error);
              setError('Error fetching data.');
          });
  };

  useEffect(()=>{ fetchVideo();},[movies.id])


  return (
    <main className=' mb-32 mt-28'>
      <section className="flex justify-around flex-wrap py-5 px-6">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={movies.title} />
          
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
        <div className=' mt-7 mb-7 lg:mt-0 '>
            {/* <button onClick={fetchVideo}>Show Video Preview</button> */}
            {isLoaded ? (
                <div id="video-container">
                    <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${videoKey}`}
                        frameBorder="0"
                        allowFullScreen
                        title="Video Preview"
                    ></iframe>
                </div>
            ) : (
                error && <div>{error}</div>
            )}
        </div>

          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movies.title}</h1>
          <p className="my-4">{movies.overview}</p>
            { movies.genres ? (
              <p className="my-7 flex flex-wrap gap-2">
              { movies.genres.map((genre) => (
                <span className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2" key={genre.id}>{genre.name}</span>
              )) }
            </p>
            ) : "" }
          
          <div className="flex items-center">
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <p className="ml-2 text-gray-900 dark:text-white">{movies.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span className="text-gray-900 dark:text-white">{movies.vote_count} reviews</span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movies.runtime} min.</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movies.budget}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movies.revenue}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movies.release_date}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a href={`https://www.imdb.com/title/${movies.imdb_id}`} target="_blank" rel="noreferrer">{movies.imdb_id}</a>
          </p>

        </div>
        
      </section>
    </main>  )
}

export default MovieDetail