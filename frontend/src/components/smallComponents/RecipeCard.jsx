  
  const RecipeCard = ({ recipe }) => {
    const cardStyle = {
      backgroundImage: `url(${recipe.imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    return (
      <div key={recipe.id} className="recipe-card h-[200px] rounded-[10px] text-center"  style={cardStyle}>
        <div className="masked pt-[145px] rounded-[10px]">
          <h2 className="recipe-name text-white">{recipe.recipeName}</h2>
          <p className="owner-name text-white">By {recipe.ownerName}</p>
        </div>
      </div>
    );
  };
  
  export default RecipeCard;
  



