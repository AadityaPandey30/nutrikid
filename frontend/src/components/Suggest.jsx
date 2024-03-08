import { useState, useRef } from 'react';
import axios from 'axios';
import RecipeCard from './smallComponents/RecipeCard';

const DemoRecipeData = [
  {
    id: 1,
    recipeName: 'Delicious Pasta',
    ownerName: 'Chef John',
    imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2023/09/Vegetable-Baked-Pasta-Video.jpg',
  },
  {
    id: 2,
    recipeName: 'Spicy Tacos',
    ownerName: 'Chef Maria',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/chicken-tacos-index-659443ccdaac5.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
  },
  {
    id: 3,
    recipeName: 'Spicy Tacos',
    ownerName: 'Chef Mulla',
    imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2023/09/Vegetable-Baked-Pasta-Video.jpg',
  },
  {
    id: 4,
    recipeName: 'Spicy Tacos',
    ownerName: 'Chef Kaala',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/chicken-tacos-index-659443ccdaac5.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
  },
];

const Suggest = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [inputText, setInputText] = useState('');
  const [elements, setElements] = useState([]);
  const [formData, setFormData] = useState({
    region: 'middleeastern',
    country: 'india',
    recipe: 'middleeastern',
    energy: '',
    carbohydrates: '',
    proteins: '',
    fats: ''
  });
  // const [suggestedRecipes, setSuggestedRecipes] = useState([]);

  const inputRef = useRef(null);
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

 
  

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      setElements((prevElements) => [...prevElements, inputText]);
      setInputText('');
      inputRef.current.focus();
    }
  };

  const removeElement = (index) => {
    setElements((prevElements) => prevElements.filter((_, i) => i !== index));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const queryParams = new URLSearchParams(formData).toString();
  //     const response = await axios.get(`/api/suggestRecipes?${queryParams}`);
  //     setSuggestedRecipes(response.data);
  //   } catch (error) {
  //     console.error('Error:', error.response.data);
  //   }
  // };
  const handleSubmit = async () => {
    try {
      let region = document.getElementById('region').value;
      let subRegion = document.getElementById('country').value;
      // const recipeTitle = document.getElementById('recipe').value;
      const recipeTitle="";
      const ingredientUsed = ''; // Set this value if you have an input field for it
      const ingredientNotUsed = ''; // Set this value if you have an input field for it
      const utensil = ''; // Set this value if you have an input field for it
      const continent= "Asian";
      region="";
      subRegion="";
  
      // Other parameters can be set based on your input fields
      const energyMin = 0;
      const energyMax = 0;
      const carbohydratesMin = 0;
      const carbohydratesMax = 0;
      const fatMin = 0;
      const fatMax = 0;
      const proteinMin = 0;
      const proteinMax = 0;
  
      const requestData = {
        continent,
        region,
        subRegion,
        recipeTitle,
        ingredientUsed,
        ingredientNotUsed,
        utensil,
        energyMin,
        energyMax,
        carbohydratesMin,
        carbohydratesMax,
        fatMin,
        fatMax,
        proteinMin,
        proteinMax
      };
  
      console.log('Request Data:', requestData);
  
      const response = await axios.post(
        'https://apis-new.foodoscope.com/recipe-search/recipesAdvanced?page=1&pageSize=10',
        requestData,
        {
          headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 4NSwMo9iFlLICMMWeR_YhliPUmETt-z9TfQ9QkRzGtIEKu8R',
            'Content-Type': 'application/json'
          }
        }
      );
  
      console.log('Response:', response.data);
  
      // Handle the response data accordingly
  
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };
  

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  return (
    <div className="container px-[5%] py-[7%]">

      <div className='flex justify-center'>
        <div className={`square ${activeSection === 'section1' ? 'active' : ''} `} onClick={() => scrollToSection('section1')}> </div>
        <div className={`square ${activeSection === 'section2' ? 'active' : ''}`} onClick={() => scrollToSection('section2')}> </div>
      </div>
      <hr className='w-[90px] justify-center m-auto my-2' />
      <div className='suggest h-fit min-h-[50vh]'>
        <div className={`code-section ${activeSection === 'section1' ? 'active' : ''} text-center`} id="section1">
          <h2 className='text-3xl mt-8'>Select by Filters</h2>
          <div className='filters flex justify-around text-left pt-10'>
            <div className='filter md:py-8 py-2 w-[200px]'>
              <h1 className='text-2xl'>Region</h1>
              <select name="language" id="region" className='px-4 py-2 md:mt-3 mt-1 md:mb-4 mb-1'>
                <option value="middleeastern">Middle Eastern</option>
                <option value="indiansubcontinent">Indian Subcontinent</option>
              </select>
            </div>
            <div className='filter md:py-8 py-2 w-[200px]'>
              <h1 className='text-2xl'>Country</h1>
              <select name="language" id="country" className='px-4 py-2 md:mt-3 mt-1 md:mb-4 mb-1'>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="democraticrepublic">Democatic Republic</option>
              </select>
            </div>
            <div className='filter md:py-8 py-2 w-[200px]'>
              <h1 className='text-2xl'>Recipe</h1>
              <select name="language" id="recipe" className='px-4 py-2 md:mt-3 mt-1 md:mb-4 mb-1'>
                <option value="middleeastern">Dal Makhni</option>
                <option value="indiansubcontinent">Paneer tikka</option>
              </select>
            </div>
           
          </div>
          <div className='filters flex justify-around text-left'>
            <div className='filter md:py-4 py-2 w-[200px]'>
              <h1 className='text-2xl' >Energy</h1>
              <input id ="energy" type='text' className='py-2 px-4 bg-[#ffde85] md:mt-3 mt-1 md:mb-4 mb-1 rounded-[5px] w-[200px]' placeholder='in cal' />
            </div>
            <div className='filter md:py-4 py-2 w-[200px]'>
            <h1 className='text-2xl'>Carbohydrates</h1>
              <input type='text' id ="carbs" className='py-2 px-4 bg-[#ffde85] md:mt-3 mt-1 md:mb-4 mb-1 rounded-[5px] w-[200px]' placeholder='in cal' />
            </div>
            <div className='filter md:py-4 py-2 w-[200px]'>
            <h1 className='text-2xl'>Proteins</h1>
              <input type='text' id ="proteins" className='py-2 px-4 bg-[#ffde85] md:mt-3 mt-1 md:mb-4 mb-1 rounded-[5px] w-[200px]' placeholder='in cal' />
            </div>
            <div className='filter md:py-4 py-2 w-[200px]'>
            <h1 className='text-2xl'>Fats</h1>
              <input type='text' id ="fats" className='py-2 px-4 bg-[#ffde85] md:mt-3 mt-1 md:mb-4 mb-1 rounded-[5px] w-[200px]' placeholder='in cal' />
            </div>
          </div>
          <div className='text-center'>
            <button onClick={handleSubmit} className="bg-[#F5BF26] text-black font-bold px-20 py-2 my-5 mx-auto rounded-[10px] hover:bg-[#ffdb76]">Submit</button>
          </div>
          <h1 className='text-2xl font-bold pt-20 pb-8'>Suggested Recipes</h1>
          <div className="recipe-card-container">
            {DemoRecipeData.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>

        <div className={`code-section ${activeSection === 'section2' ? 'active' : ''} text-center`} id="section2">
          <h2 className='text-3xl mt-8'>Make your Recipe</h2>
          <input
            type='text'
            className='px-3 py-2 rounded-[8px] bg-yellow-100 mt-5 w-[250px]'
            placeholder='Enter Ingredients'
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={handleEnterPress}
            ref={inputRef}
          />
          <div className='p-4 my-7 bg-yellow-100 w-[50%] min-w-[300px] m-auto rounded-[10px] min-h-20 h-fit'>
            {elements.map((element, index) => (
              <div key={index} className='border pl-3 pr-2 py-2 m-1 inline-block relative bg-yellow-500 rounded-[6px]'>
                {element}
                <button className='cross-button ml-3 px-1' onClick={() => removeElement(index)}>
                  &#x2715;
                </button>
              </div>
            ))}
          </div>
          <div className='text-center'>
            <button className="bg-[#F5BF26] text-black font-bold px-20 py-2 mx-auto rounded-[10px] hover:bg-[#ffdb76]">Cook</button>
          </div>
          <h1 className='text-2xl font-bold pt-20 pb-8'>Suggested Recipes</h1>
          <div className="recipe-card-container">
            {DemoRecipeData.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggest;
