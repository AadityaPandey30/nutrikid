import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeCardDetailsCustomize = () => {
  const { id } = useParams();
  const apiKey = "4NSwMo9iFlLICMMWeR_YhliPUmETt-z9TfQ9QkRzGtIEKu8R"; // Make sure to use your actual API key

  // Function to fetch recipe details from the API
  const fetchRecipeDetails = async (recipeId) => {
    try {
      const response = await axios.get(
        `https://apis-new.foodoscope.com/recipe/${recipeId}`, // Make sure this URL is correct
        {
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      const recipeDetails = response.data.payload; // Assuming the details are in the 'payload' property
      return recipeDetails;
    } catch (error) {
      console.error('Error fetching recipe details:', error);
      return null;
    }
  };

  // Function to fetch similar ingredients from the backend API
  const fetchSimilarIngredients = async (ingredients) => {
    try {
      const token = localStorage.getItem('jwt'); // Get the user's authentication token from local storage
      const ingredientsString = ingredients.map(ingredient => ingredient.ingredient).join(',');
      const response = await axios.post(
        'http://localhost:8000/api/v1/showSimilarIngredients', 
        { ingredients: ingredientsString },
        {
          headers: {
            'Authorization': `Bearer${token}`,
          },
        }
      );
      const similarIngredients = response.data.data; // Correctly extract the similarIngredients array
      console.log('Similar Ingredients:', similarIngredients);
      return similarIngredients; // Return similar ingredients data
    } catch (error) {
      console.error('Error fetching similar ingredients:', error);
      return null;
    }
  };
  
  // Function to fetch more dishes based on ingredients used
  const fetchMoreDishes = async (ingredientUsed) => {
    try {
      const response = await axios.post(
        'https://apis-new.foodoscope.com/recipe-search/recipesByIngredient?page=1&pageSize=10', 
        {
          ingredientUsed,
          ingredientNotUsed: "",
        },
        {
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const additionalDishes = response.data; // Assuming the response contains additional dishes
      console.log('Additional Dishes:', additionalDishes);
      return additionalDishes;
    } catch (error) {
      console.error('Error fetching more dishes:', error);
      return [];
    }
  };

  const [recipeDetails, setRecipeDetails] = useState(null);
  const [similarIngredients, setSimilarIngredients] = useState(null);
  const [additionalDishes, setAdditionalDishes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const details = await fetchRecipeDetails(id);
      if (details) {
        setRecipeDetails(details);
        const similar = await fetchSimilarIngredients(details.ingredients);
        if (similar) {
          setSimilarIngredients(similar);
        }
      } else {
        // Handle error or set state accordingly
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    // Fetch more dishes based on similar ingredients when the component mounts
    const fetchDishes = async () => {
      if (similarIngredients) {
        const moreDishes = await fetchMoreDishes(similarIngredients);
        setAdditionalDishes(moreDishes);
      }
    };

    fetchDishes();
  }, [similarIngredients]);

  if (!recipeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container px-[5%] py-10'>
      <h1 className='font-bold text-3xl text-center pb-4 pt-8'>{recipeDetails.Recipe_title}</h1>
      <div className="recipe-details-page m-auto w-fit">
        <div className='side1 text-center py-4'>
          <img src={recipeDetails.img_url} alt={recipeDetails.Recipe_title} className='my-8 img-card m-auto' />
          <div className='details text-2xl'>
            <p className='text-gray-700'>Source: {recipeDetails.Source}</p>
            <p className='text-gray-700'>Calories: {recipeDetails.Calories} cal</p>
            <p className='text-gray-700'>Carbohydrates: {recipeDetails['Carbohydrate, by difference (g)']} g</p>
            <p className='text-gray-700'>Cook Time: {recipeDetails.cook_time}</p>
            <p className='text-gray-700'>Servings: {recipeDetails.servings}</p>
          </div>
        </div>
        <div className='side2 py-4 md:flex flex-col md:w-[60%] w-[90%] max-w-[800px] m-auto'>
          <div className='text-left  pr-5 w-[60%]'>
          <h2 className='font-bold text-2xl py-4'>Ingredients</h2>
          <ul>
            {recipeDetails.ingredients.map((ingredient, index) => (
              <li key={index} className='text-gray-700 my-2'>
                {ingredient.quantity} {ingredient.unit} {ingredient.ingredient} {ingredient.state}
              </li>
            ))}
          </ul>
          </div>
          <div className='basis-1/3'>
          {similarIngredients && (
            <div>
              <h2 className='font-bold text-2xl py-4'>Similar Ingredients</h2>
              <p>{similarIngredients}</p>
            </div>
          )}

          {/* Display additional dishes */}
          {additionalDishes.length > 0 && (
            <div>
              <h2 className='font-bold text-2xl py-4'>Additional Dishes</h2>
              {additionalDishes.map((dish, index) => (
                <p key={index}>{dish.name}</p>
              ))}
            </div>
          )}
          </div>
        </div>  
          
      </div>
    </div>
  );
};

export default RecipeCardDetailsCustomize;
