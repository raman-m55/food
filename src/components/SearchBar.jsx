import React, { useContext, useState  } from 'react'
import { useNavigate } from "react-router-dom";
import {useStateContext} from './StateG';




const SearchBar = () => {
  const {results, setResults} = useStateContext();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/search/${results}`);

    }
    
  return (
    <div className='flex justify-center items-center mt-5 w-4/6'>
        <input className='w-screen rounded-l-md h-12 p-2 text-lg outline-none' value={results}
        onChange={(e) => setResults(e.target.value)} placeholder='enter...'/>
        <button className='text-white bg-blue-700 rounded-r-md h-12 w-32 cursor-pointer font-lg'
        type='button' onClick={handleClick}>
            Search
        </button>
    </div>
  )
}

export default SearchBar