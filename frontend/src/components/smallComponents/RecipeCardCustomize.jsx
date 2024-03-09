

import { Link } from 'react-router-dom';

const RecipeCardCustomize = ({ recipe }) => {
  const cardStyle = {
    backgroundImage: `url(${recipe.img_url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <Link to={`/recipecustomize/${recipe.Recipe_id}`} className="recipe-card h-[200px] rounded-[10px] text-center cursor-pointer" style={cardStyle}>
      <div className="masked pt-[145px] rounded-[10px]">
        <h2 className="recipe-name text-white">{recipe.Recipe_title}</h2>
      </div>
    </Link>
  );
};

export default RecipeCardCustomize;













