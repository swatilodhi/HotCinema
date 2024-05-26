import { Route, Routes, useParams } from "react-router-dom";
import { PageNotFound, Movielist, Search } from "../Pages";
import { MovieDetail } from "../Pages"; // Import MovieDetail specifically
import React from 'react'
// import ContactUs from "../Component/ContactUs";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="" element={<Movielist apiPath="movie/now_playing" title="Home"/>} />
      <Route path="movie/:id" element={<MovieDetailWrapper />} />
      <Route path="movies/popular" element={<Movielist apiPath="movie/popular"title="Popular Movies"/>} />
      <Route path="movies/top" element={<Movielist apiPath="movie/top_rated" title="Top_Rated Movies " />} />
      <Route path="movies/upcoming" element={<Movielist apiPath="movie/upcoming" title="Upcoming Movies" />} />
      <Route path="search" element={<Search apiPath="search/movie" title="Search"/>} />
      <Route path="*" element={<PageNotFound />} />
      {/* <Route path="contactus" element={<ContactUs />} /> Corrected path */}

    </Routes>
  );
}

const MovieDetailWrapper = () => {
  // Accessing id from props.params
  // console.log("props",props)
  const { id } = useParams();
  // Remove colon from id
   const movieId = id.replace(':', '');
  console.log("movie id",movieId);
  return <MovieDetail apiPath={`movie/${movieId}`} />;
}
export default Allroutes;
