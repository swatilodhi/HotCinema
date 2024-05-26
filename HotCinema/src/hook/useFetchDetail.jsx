
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchDetail = ({ apiPath}) => {
    const [data, setData] = useState([]);
    
    const apiKey = `4f7b1fc43891c9dbe160c20bb8b2470e`;
    // const[apiurl,setapiurl]=useState(apiPath);
        const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}`;
    
    useEffect(() => {
        const fetchMovies = async () => {
            
            try {
                const response = await axios.get(url); // Use the dynamically constructed URL
                setData(response.data);
                console.log("d",response.data.origin_country)
                
        
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
                   };

        fetchMovies();
    }, [ url]); // Depend on currentPage and url

    return { data};

}

export default useFetchDetail