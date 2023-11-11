import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MealDetails from './MealDetails';

const Cards = ({item , index}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the 'MealDetails' route and pass the 'item' prop as a parameter
    navigate(`/meal/${index}` , { state: { item } });
  }


  return (
    // <Link to={`/meal/${index}`}>
      <div className='text-slate-300 w-[250px] xl:w-[200px] md:w-[170px] sm:w-[140px] mx-2 bg-gray-700 rounded-md outline-none cursor-pointer'
      onClick={handleClick}>
        <div className='w-full  h-[250px] xl:h-[200px] md:h-[170px] sm:h-[140px]'>
        <img src={item.recipe.image} alt={item.recipe.image} className='bg-cover w-full h-full 
        rounded-t-md'  />
        </div>
        <div className='p-2 mt-1'>
        <h1 className='text-xl xl:text-base '>{item.recipe.label.slice(0,40)}</h1>
        <p className='text-sm text-slate-100 mt-2 '>calorie : {Math.floor(item.recipe.calories)}</p>
        {item.recipe.totalTime > 0 ? <p className='text-sm text-slate-100 mt-1'>preparation time : {item.recipe.totalTime}</p> : undefined}
        </div>
      </div>  
    // </Link>
    )
}

export default Cards