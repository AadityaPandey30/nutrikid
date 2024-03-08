import { useState, useRef } from 'react';
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
          <h2 className='text-3xl mt-8'>Select by Region</h2>
          <div className='filters flex justify-between'>
            <div className='filter md:py-8 py-2 w-[200px]'>
              <h1 className='text-2xl'>Region</h1>
              <select name="language" id="language" className='px-4 py-2 md:mt-3 mt-1 md:mb-4 mb-1'>
                <option value="middleeastern">Middle Eastern</option>
                <option value="indiansubcontinent">Indian Subcontinent</option>
              </select>
            </div>
            <div className='filter md:py-8 py-2 w-[200px]'>
              <h1 className='text-2xl'>Country</h1>
              <select name="language" id="language" className='px-4 py-2 md:mt-3 mt-1 md:mb-4 mb-1'>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="democraticrepublic">Democatic Republic</option>
              </select>
            </div>
            <div className='filter md:py-8 py-2 w-[200px]'>
              <h1 className='text-2xl'>Recipe</h1>
              <select name="language" id="language" className='px-4 py-2 md:mt-3 mt-1 md:mb-4 mb-1'>
                <option value="middleeastern">Middle Eastern</option>
                <option value="indiansubcontinent">Indian Subcontinent</option>
              </select>
            </div>
          </div>
          <div className='text-center'>
            <button className="bg-[#F5BF26] text-black font-bold px-20 py-2 mx-auto rounded-[10px] hover:bg-[#ffdb76]">Submit</button>
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
