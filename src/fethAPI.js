

const API_ID =  'hidden';
const API_KEY = 'hidden';


export const getRecipes = async (query, mealTyp) => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public${query}&app_id=${API_ID}&app_key=${API_KEY}${mealTyp}`);
    const data = await response.json();
    return data.hits;
  };


