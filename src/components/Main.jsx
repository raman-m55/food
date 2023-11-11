import React, { useEffect, useState } from 'react'
import CardSlider from './CardSlider'
import {getRecipes} from '../fethAPI';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Meal = ['Breakfast','Dinner']


const Main = () => {

  const [meals, setMeals] = useState();
  const [mealsDinner , setMealsDinner] = useState();

  useEffect(()=>{
    const getAPI = async () => {
    const data = await getRecipes('' ,'&mealType=Breakfast' )
    setMeals(data);
    console.log(meals)
    // console.log(data)
    }

    getAPI();
  },[])



  useEffect(()=>{
    const getAPI = async () => {
    const data = await getRecipes('' ,'&mealType=Dinner' )
    setMealsDinner(data);
    }

    getAPI();
  },[])


    
  return (
    <div className='bg-black p-2 h-full flex  items-center flex-col '>
      <h1 className='text-2xl text-white text-center  font-bold mt-5'>Popular foods</h1>
      <div  className='md:w-[85%] sm:w-[75%] w-[85%] text-white mt-24' >
          <h1 className='my-6  text-2xl font-bold'>Breakfast</h1>
          <CardSlider meals={meals}/>
        </div>
        <div  className='md:w-[85%] sm:w-[75%] w-[85%] m- text-white mt-24' >
          <h1 className='my-6 text-2xl font-bold'>Dinner</h1>
          <CardSlider meals={mealsDinner}/>
        </div>
    </div>
  )
}

export default Main


