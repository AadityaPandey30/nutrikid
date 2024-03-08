const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getDiets = catchAsync(async (req, res, next) => {
  var axios = require("axios");

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://cosylab.iiitd.edu.in/rdbapi/recipeDB/searchRecipeByNutrients?energy=328:330&carbohydrates=5:7&protien=52:53&calories=455:460&fat=10:12",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      return next(new AppError(error, 401));
    });
});
