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
      setSimilarIngredients(similarIngredients); // Set the similar ingredients state
      console.log(similarIngredients);
      return similarIngredients; // Return similar ingredients data
    } catch (error) {
      console.error('Error fetching similar ingredients:', error);
      setSimilarIngredients(null); // Handle error by setting similar ingredients state to null
      return null;
    }
  };
  

  const [recipeDetails, setRecipeDetails] = useState(null);
  const [similarIngredients, setSimilarIngredients] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const details = await fetchRecipeDetails(id);
      if (details) {
        setRecipeDetails(details);
        const similar = await fetchSimilarIngredients(details.ingredients);
        if (similar) {
          setSimilarIngredients(similar);
          console.log(similar);
        }
      } else {
        // Handle error or set state accordingly
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    // Fetch similar ingredients when the component mounts
    const fetchSimilar = async () => {
      const similar = await fetchSimilarIngredients(recipeDetails.ingredients);
      if (similar) {
        setSimilarIngredients(similar);
        console.log(similar);
      }
    };

    if (recipeDetails) {
      fetchSimilar();
    }
  }, []);

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
          {/* Display similar ingredients */}
          {similarIngredients && (
            <div>
              <h2 className='font-bold text-2xl py-4'>Similar Ingredients</h2>
              <p>{similarIngredients}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCardDetailsCustomize;
