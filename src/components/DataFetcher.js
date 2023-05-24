import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parseXML } from './parseXML';

const API_URL = 'https://victorysquarepartners.com/curs1.php'; 

const DataFetcher = ({ onFetch }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = parseXML(response.data);
        onFetch(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 24 * 60 * 60 * 1000); 

    return () => {
      clearInterval(intervalId);
    };
  }, [onFetch]);

  return <div>Fetching data...</div>;
};

export default DataFetcher;