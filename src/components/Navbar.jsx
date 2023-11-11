import React from 'react'
import SearchBar from './SearchBar'

const Navbar = ({setResults}) => {
  return (
    <div className='bg-black h-[25vh] flex justify-center items-center flex-col'>
        <h1 className='text-white text-4xl p-2.5 font-bold'>food search</h1>
        <p className='text-white my-2 '>Search hundreds of thousands of recipes...</p>
        <SearchBar  setResults={setResults} />    
    </div>
  )
}

export default Navbar