import React from 'react'
import ShareButtons from './ShareButton'
import { Link, NavLink ,useNavigate} from "react-router-dom";

const Footer = () => {
    const url = 'https//hotcinema.live';
  const title = 'Check out this awesome website!';
  const activeClass="block text-base py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" ;
  const InactiveClass="block text-base py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  
  return (
    <>
    

<footer className="bg-white   dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 HotCinema  </span>
    
  <span className=" float-end">  
  <ShareButtons  url={url} title={title} />
  </span>
    </div>
   

</footer>

    </>
  )
}

export default Footer