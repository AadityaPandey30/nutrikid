

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

  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const details = await fetchRecipeDetails(id);
      if (details) {
        setRecipeDetails(details);
      } else {
        // Handle error or set state accordingly
      }
    };

    fetchData();
  }, [id]);

  if (!recipeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container px-[5%] py-10'>
      <h1 className='font-bold text-3xl text-center pb-4 pt-8'>{recipeDetails.Recipe_title}</h1>
      <div className="recipe-details-page">
        <div className='side1'>
          <img src={recipeDetails.img_url} alt={recipeDetails.Recipe_title} className='my-8 img-card' />
          <div className='details'>
            <p className='text-gray-700'>Source: {recipeDetails.Source}</p>
            <p className='text-gray-700'>Calories: {recipeDetails.Calories} cal</p>
            <p className='text-gray-700'>Carbohydrates: {recipeDetails['Carbohydrate, by difference (g)']} g</p>
            <p className='text-gray-700'>Cook Time: {recipeDetails.cook_time}</p>
            <p className='text-gray-700'>Servings: {recipeDetails.servings}</p>
          </div>
        </div>
        <div className='side2'>
          <h2 className='font-bold text-2xl py-4'>Ingredients</h2>
          <ul>
            {recipeDetails.ingredients.map((ingredient, index) => (
              <li key={index} className='text-gray-700 my-2'>
                {ingredient.quantity} {ingredient.unit} {ingredient.ingredient} {ingredient.state}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeCardDetailsCustomize;













