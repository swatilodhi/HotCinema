import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const useFetch = ({ apiPath, page, queryTerm = "" }) => {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
     const apiKey = `4f7b1fc43891c9dbe160c20bb8b2470e`;
    
    const navigate = useNavigate();
    
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&page=${page}&query=${queryTerm}`;
        
        const fetchMovies = async () => {
            try {
                const response = await axios.get(url); // Use the dynamically constructed URL
                setData(response.data.results);
                
                if (response.data.results.length === 0) {
                    navigate(`/*?q=${queryTerm}`);
                    console.log("no data");
                }

                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, [apiPath, page, queryTerm, apiKey, navigate]); // Depend on apiPath, page, queryTerm, apiKey, navigate

    return { data, totalPages };
};

export default useFetch;
