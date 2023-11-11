import React from 'react'
import {Link , useLocation   } from 'react-router-dom'


const MealDetails = () => {

    const location = useLocation();
    const item = location.state.item; // Accessing the item prop
  
  return (
    <div className='bg-black h-full w-full  px-[10%] pt-10'>
        <div className='w-full flex justify-between text-white font-bold '>
            <Link to='/'>
            <p className='text-blue-500'>Home</p>
            </Link>
            <h1 className='text-3xl'>Meal Details</h1>
        </div>
        <div className='flex sm:flex-col justify-between mt-10 text-white '>
            <div className='sm:w-4/6'>
            <img src={item.recipe.image} alt={item.recipe.label} className='w-full h-full object-cover
            rounded-md'/>
            </div>
            <div className='sm:mt-10'>
            <h2 className='text-3xl'>{item.recipe.label}</h2>
            {item.recipe.ingredientLines.map((item , index) => (
                <p key={index} className='my-5 '>  <span className='mx-1'>○</span> {item}</p>
            ))}
            </div>
        </div>
        <div className='flex items-start justify-center text-white gap-10 flex-wrap py-10'> 
        {Object.entries(item.recipe.totalDaily).map(([key, value], index) => (
            <div key={index} className='border-violet-700 '>
                <p className=''> 
                <span className='text-lg text-green-500 mr-5'>{value.label}</span>:  {Math.floor(value.quantity)}{value.unit}
                </p>
            </div>

    ))}
        </div>
        <p className='text-blue-200 py-10'><a href={item.recipe.url} target='_blank'>More information about the cooking method ...</a></p>
        {console.log(item)}
    </div>
  )
}

export default MealDetails