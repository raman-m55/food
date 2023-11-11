import React, { useEffect, useState ,useContext } from 'react'
import { useParams } from 'react-router-dom'
import Cards from './Cards';
import {getRecipes} from '../fethAPI';
import {useStateContext} from './StateG';

const SearchResultComponent = () => {
  const {results} = useStateContext()

  const [resultSearch, setResultSearch] = useState()

  const params = useParams();
  

  useEffect(()=>{
    const getAPI = async () => {
      try {
            const data = await getRecipes(`&q=${results}` ,'' )
    console.log(data)
    setResultSearch(data)
      }  catch (error) {
        console.error('API request failed:', error);
      }

    }
    console.log(params)
    getAPI();
  },[params])


  return (
    <div className='h-full p-2 bg-black py-10 w-full flex flex-wrap gap-5 justify-center '>
      {resultSearch && resultSearch.map((item , index) => (
        <Cards key={index} item={item} />
      ))}
    </div>
  )
}

export default SearchResultComponent