import { useParams } from 'react-router-dom';
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

const RecipeCardDetails = () => {
  const { id } = useParams();
  const selectedRecipe = DemoRecipeData.find((recipe) => recipe.id.toString() === id);

  if (!selectedRecipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-details-page">
      <img src={selectedRecipe.imageUrl} alt={selectedRecipe.recipeName} />
      <h2>{selectedRecipe.recipeName}</h2>
      <p>By {selectedRecipe.ownerName}</p>
    </div>
  );
};

export default RecipeCardDetails;
