import RecipeCard from "./smallComponents/RecipeCard"
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

const Customize = ()=>{
    return(
        <div className="container px-[5%]">
            <div className="">
                <h1 className="text-2xl font-bold py-5">Search for recipes</h1>
                <input type="search" className="px-2 py-3 bg-blue-50 rounded-[8px] w-[60%] min-w-[300px]" placeholder="Search for a recipe" />
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
                {DemoRecipeData.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
            </div>


            </div>
        </div>

    )
}

export default Customize