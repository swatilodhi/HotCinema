import React, { useEffect } from 'react'
import { Link, NavLink ,useNavigate} from "react-router-dom";
import { useState } from 'react';
import moon  from "/src/assets/moon.png";
import sun from "/src/assets/sun.png"
import logo from "/src/assets/reshot-icon-movie-trailers-4QYT3HRJ2E.svg"
const Header = () => {
  const activeClass="block text-base py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" ;
  const InactiveClass="block text-base py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  const [hidden, sethidden]=useState(true);
  const navigate=useNavigate();
  const[darkmode,setdarkmode]=useState(localStorage.getItem("darkmode")==="true");
  useEffect(()=>{
    localStorage.setItem("darkmode",darkmode);
    let toggle=localStorage.getItem("darkmode");
   console.log("my v",toggle);
      toggle=toggle==="true"
    if(!toggle)
    {
      document.documentElement.classList.remove("dark");
    }else{
      document.documentElement.classList.add("dark");
    }
  },[darkmode]);
  
  const handleSubmit=(event)=>
  {
    sethidden(!hidden)
    event.preventDefault();
    const queryTerm=event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`);
    
  }
  return (
    <>


      <nav id="nav" className="bg-white  fixed top-0 left-0 w-full border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="https://HotCinema.live/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img  src={logo} className="h-8" alt="logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HotCinema</span>
          </Link>
          <div className="flex md:order-2">
           <button onClick={()=>setdarkmode(!darkmode)} className=' bg-white w-6 h-6 p-1 mt-2 mr-7 rounded-full'>{darkmode ? (<img src={sun} />):(<img src={moon}  />) }</button>
            <button onClick={()=>sethidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`${hidden ? "hidden": "block"}  items-center pt-5 md:pt-0 justify-between  w-full  lg:flex  md:w-auto md:order-1`} id="navbar-search">
            <div className={`${hidden ? "hidden": "block"}  relative  md:block md:mr-8  `}>
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <form onSubmit={handleSubmit}>
              <input type="text" id="search-navbar" name='search' className=" md:w-96 w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none " placeholder="Search..." autoComplete='off'/>
               
              </form>
            </div>

            <ul className="flex flex-col p-4 md:p-0 md:ml-20 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className={({isActive})=>isActive ? activeClass : InactiveClass} aria-current="page" onClick={()=>sethidden(!hidden)} >Home</NavLink>
              </li>
              <li>
                <NavLink to="movies/popular" className={({isActive})=>isActive ? activeClass : InactiveClass}  onClick={()=>sethidden(!hidden)} >Popular</NavLink>
              </li>
              <li>
                <NavLink to="movies/top" className={({isActive})=>isActive ? activeClass : InactiveClass} onClick={()=>sethidden(!hidden)} >Top Rated</NavLink>
              </li>
              <li>
                <NavLink to="movies/upcoming" className={({isActive})=>isActive ? activeClass : InactiveClass} onClick={()=>sethidden(!hidden)} >Upcoming</NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>



    </>
  )
}

export default Header