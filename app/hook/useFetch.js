import { useState, useEffect } from 'react';
import axios from 'axios';

 


const RapidApiKey = RAPID_API_KEY



const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    


    const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
    'X-RapidAPI-Key': RapidApiKey,
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: {
    ...query 
  },


}}

