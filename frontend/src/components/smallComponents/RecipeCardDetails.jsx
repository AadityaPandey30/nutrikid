import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeCardDetails = () => {
  const { id } = useParams();
  const apiKey = "4NSwMo9iFlLICMMWeR_YhliPUmETt-z9TfQ9QkRzGtIEKu8R";

  // Function to fetch recipe details from the API
  const fetchRecipeDetails = async (recipeId) => {
    try {
      const response = await axios.get(
        `https://apis-new.foodoscope.com/recipe/${recipeId}`,
        {
          headers: {
            'Accept': 'application/json',
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
    <div className='container px-[5%] py-10 m-auto'>
      <h1 className='font-bold text-3xl text-center pb-4 pt-8'>{recipeDetails.Recipe_title}</h1>
      <div className="recipe-details-page w-fit m-auto">
        <div className='side1'>
          <img src={recipeDetails.img_url} alt={recipeDetails.Recipe_title} className='my-8 img-card' />
        </div>
        <div className='side2 text-left'>
          <div className='details'>
          <p className='text-gray-700'>Source: {recipeDetails.Source}</p>
          <p className='text-gray-700'>Calories: {recipeDetails.Calories} cal</p>
          <p className='text-gray-700'>Carbohydrates: {recipeDetails['Carbohydrate, by difference (g)']} g</p>
          <p className='text-gray-700'>Cook Time: {recipeDetails.cook_time}</p>
          <p className='text-gray-700'>Protein: {recipeDetails.protein}</p>
          <p className='text-gray-700'>Servings: {recipeDetails.servings}</p>
          <p className='text-gray-700'>Energy: {recipeDetails.energykcal}</p>
          <p className='text-gray-700'>Servings: {recipeDetails.servings}</p>
          <p className='text-gray-700'>Region: {recipeDetails.region}</p>
          </div>
        </div>
      
    </div>
    </div>
  );
};

export default RecipeCardDetails;
