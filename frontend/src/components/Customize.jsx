import RecipeCard from "./smallComponents/RecipeCard"
import { useEffect, useState } from "react";
import axios from 'axios';


const Customize = ()=>{

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    // Fetch all recipes when the component mounts
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        'https://apis-new.foodoscope.com/recipe-search/recipe?searchText=all&page=0&pageSize=10',
        {
          headers: {
            'accept':'application/json',
            'Authorization':'Bearer 4NSwMo9iFlLICMMWeR_YhliPUmETt-z9TfQ9QkRzGtIEKu8R',
      
          }
        }
      );

    // Check if the response data is an array or extract the array from the response
    const recipesArray = Array.isArray(response.data?.payload?.data) ? response.data.payload.data : [];
    setAllRecipes(recipesArray);
    setFilteredRecipes(recipesArray);
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
};

  const handleInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // Filter recipes based on the input text
    const filtered = allRecipes.filter(recipe =>
      recipe.Recipe_title.toLowerCase().includes(searchTerm)
    );

    setFilteredRecipes(filtered);
  };

    return(
      <div className="container px-[5%]">
      <div className="">
        <h1 className="text-2xl font-bold py-5">Search for recipes</h1>
        <input
          type="search"
          className="px-2 py-3 bg-blue-50 rounded-[8px] w-[60%] min-w-[300px]"
          placeholder="Search for a recipe"
          value={searchTerm}
          onChange={handleInputChange}
        />
                <h1 className="text-1xl py-4 font-semibold">Popular Searches</h1>
                <div className="popular flex py-2">
                    <div className="bg-blue-50 rounded-[10px] w-fit px-2 py-1 mr-4 cursor-pointer">Tacos</div>
                    <div className="bg-blue-50 rounded-[10px] w-fit px-2 py-1 mr-4 cursor-pointer">Pizza</div>
                    <div className="bg-blue-50 rounded-[10px] w-fit px-2 py-1 mr-4 cursor-pointer">Brownies</div>
                    <div className="bg-blue-50 rounded-[10px] w-fit px-2 py-1 mr-4 cursor-pointer">Lasagna</div>
                    <div className="bg-blue-50 rounded-[10px] w-fit px-2 py-1 mr-4 cursor-pointer">Burgers</div>
                </div>
                <h1 className="text-2xl py-4 font-semibold pt-8">Try these healthier alternatives</h1>
                <div className="recipe-card-container py-2">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.Recipe_id} recipe={recipe} />
          ))}
        </div>
            </div>
        </div>

    )
}

export default Customize