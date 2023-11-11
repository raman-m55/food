

const API_ID =  '0';
const API_KEY = '260c8bf5f81a13b121504a94bd3a19cf';


export const getRecipes = async (query, mealTyp) => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public${query}&app_id=${API_ID}&app_key=${API_KEY}${mealTyp}`);
    const data = await response.json();
    return data.hits;
  };


