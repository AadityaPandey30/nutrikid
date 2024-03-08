import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const cardStyle = {
    backgroundImage: `url(${recipe.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card h-[200px] rounded-[10px] text-center cursor-pointer" style={cardStyle}>
      <div className="masked pt-[145px] rounded-[10px]">
        <h2 className="recipe-name text-white">{recipe.recipeName}</h2>
      </div>
    </Link>
  );
};

export default RecipeCard;
