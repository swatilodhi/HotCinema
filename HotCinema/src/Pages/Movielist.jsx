import React, { useState, useEffect } from 'react';
import Card from '../Component/Card';
import useFetch from '../hook/useFetch';



const Movielist = ({apiPath,title}) => {

  const [currentPage, setCurrentPage] = useState(1);
   const {data:movies,totalPages }=useFetch({apiPath,currentPage});
   useEffect(()=>{
    document.title=`${title}`;
  },[title]);
 
  useEffect(() => {
  
    setCurrentPage(1);
  }, [apiPath]);
  
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <main className=' mb-32 mt-28 dark:bg-gray-900'>
      <section className='p-7 flex justify-center'>
        <div className='flex justify-center w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-center'>
            {movies.map((list, index) => (
              <Card className='flex-1' key={index} list={list}></Card>
            ))}
          </div>
        </div>
      </section>
      <div className='flex justify-center mt-5'>
        <button
          className='mx-2 px-4 py-2 bg-blue-500 text-white rounded-md'
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className='mx-2 dark:text-white leading-10'>Page {currentPage} of {totalPages}</span>
        <button
          className='mx-2 px-4 py-2 bg-blue-500 text-white rounded-md'
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </main>
  );
}

export default Movielist;
``