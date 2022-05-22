import React, { useEffect, useState } from 'react'
import { DetailData } from '../types/Navigation';

const useMovieStorage = (itemName: String) => {

    const [data, setData] = useState<Array<DetailData>>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const response = fetchData();
        setData(response);
    }, [])

    const fetchData = () => {
        const data = localStorage.getItem(String(itemName));
        return JSON.parse(String(data)) || [];
    }

    const insertData = (movieData: DetailData) => {
        setData([...data, movieData]);
        const dataToFetch = JSON.stringify(data);
        localStorage.setItem(String(itemName), dataToFetch);
        setIsLoading(true)
    }

    const deleteAllData = () => {
        setData([]);
        const dataToFetch = JSON.stringify(data);
        localStorage.setItem(String(itemName), dataToFetch);
    }

    const findOne = (movieID: String) => {
        const filteredData = data.filter((movie, value) => movie.id === movieID);
        return filteredData;
    }

    const deleteOne = (movieID: String) => {
        const filteredData = data.filter((movie, value) => movie.id !== movieID);
        setData(filteredData);
        const dataToFetch = JSON.stringify(data);
        localStorage.setItem(String(itemName), dataToFetch);
    }

    return { data, fetchData, insertData, deleteAllData, deleteOne, findOne, setData  }
}

export default useMovieStorage;