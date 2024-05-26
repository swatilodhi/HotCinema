import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const useFetch = ({ apiPath, currentPage,queryTerm=" " }) => {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const apiKey = `4f7b1fc43891c9dbe160c20bb8b2470e`;
    const[apiurl,setapiurl]=useState(apiPath);
    console.log("api",apiurl);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&page=${currentPage}&query=${queryTerm}`;
    const navigate=useNavigate();
    console.log("movie id22",apiPath);
    
    useEffect(() => {
        const fetchMovies = async () => {
            
            try {
                const response = await axios.get(url); // Use the dynamically constructed URL
                setData(response.data.results);
                console.log("h",response.origin_country)
                if(response.data.results<=0)
                {
                     navigate(`/*?q=${queryTerm}`);
                console.log(data);
                console.log("no data");
    
    
                }
    
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
                   };

        fetchMovies();
    }, [currentPage, url]); // Depend on currentPage and url

    return { data, totalPages };
};

export default useFetch;
