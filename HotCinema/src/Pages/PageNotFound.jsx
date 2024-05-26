import React, { useEffect } from 'react'

import  {useSearchParams} from 'react-router-dom';

const PageNotFound = () => {
  const [searchparam]=useSearchParams();
   const queryTerm=searchparam.get("q");
  console.log("qq",queryTerm);
  useEffect(()=>{
    document.title=`Page Not Found`;
  },[]);
  return (
    <main className='pt-24 w-full  h-screen dark:text-white dark:bg-black'>
      <section className=' '>
        <div className=' flex justify-start px-5'>
          <h1 className=' text-4xl text-black dark:text-white'>No search result found for {queryTerm} </h1>
        </div>
      </section>



    </main>
  )
}

export default PageNotFound