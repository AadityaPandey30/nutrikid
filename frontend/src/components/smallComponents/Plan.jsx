import React, { useState, useEffect } from "react";
import axios from "axios";
import breaki from "../../images/breaki.jpg";
import snack from "../../images/snack.jpg";
import addition from "../../images/addition.jpg";
import dinner from "../../images/dinner.jpg";
const Plan = () => {
    const [mealPlan, setMealPlan] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetchMealPlan(); // Fetch meal plan when the component mounts
    }, []);
  
    const fetchMealPlan = async () => {
        setLoading(true);
        try {
          const token = localStorage.getItem("jwt");
          console.log(token);
      
          // Define the parameters you want to send in the request body
          const requestBody = {
            prompt: "Genrate the four time meal",
            // Add any other parameters you need
          };
      
          // Making a POST request with Axios
          const response = await axios.post('http://localhost:8000/api/v1/diet/diets', requestBody, {
            headers: {
              Authorization: `Bearer${token}`,
            },
          });
      
          // Handle the response as needed
          setMealPlan(response.data.data);
          console.log(response.data.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching meal plan:", error);
          setError("Error fetching meal plan. Please try again later.");
          setLoading(false);
        }
      };
      
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container px-[5%]">
      <div className="plan my-[5%]">
        <div className="new-mask">
          <h1 className="text-white font-bold text-4xl py-2">Meal plan for your child</h1>
          <p className="text-white text-2xl py-1">We&apos;ve put together a meal plan for you. This is a sample of what your child can eat in a day. It&apos;s important to remember that every child is different, and this plan may not work for everyone. If you have any questions or concerns, please talk to your doctor or dietitian.</p>
          <button className="bg-[#F5BF26] text-black font-bold px-6 py-2 my-2 rounded-[10px] hover:bg-[#ffdb76]">Print</button>
        </div>
      </div>
      <div className="meals">
        <h1 className="text-2xl font-semibold pt-2">Breakfast</h1>
        <div className="flex">
          <div className="basis-4/5 pb-4 pt-5">
            <p className="text-gray-500">Total: 300 calories</p>
            <h1 className="font-semibold py-2">Oatmeal with banana and walnuts</h1>
            <p className="text-gray-500">Oatmeal with banana and walnuts</p>
          </div>
          <img src={breaki} className="basis-[30%] w-[30%] py-5" alt="Breakfast" />
        </div>

        <h1 className="text-2xl font-semibold pt-2">Additives</h1>
        <div className="flex">
          <div className="basis-4/5 pb-4 pt-5">
            <p className="text-gray-500">Total: 150 calories</p>
            <h1 className="font-semibold py-2">Yogurt with berries</h1>
            <p className="text-gray-500">1/2 cup yogurt, 1/2 cup mixed berries</p>
          </div>
          <img src={addition} className="basis-[30%] w-[30%] py-5" alt="Additives" />
        </div>

        <h1 className="text-2xl font-semibold pt-2">Lunch</h1>
        <div className="flex">
          <div className="basis-4/5 pb-4 pt-5 pr-4">
            <p className="text-gray-500">Total: 500 calories</p>
            <h1 className="font-semibold py-2">Turkey and cheese sandwich</h1>
            <p className="text-gray-500">2 slices whole wheat bread, 2 oz turkey, 1 slice cheddar cheese, 1 tbsp mayonnaise, 1/2 cup baby carrots, 1/2 cup hummus</p>
          </div>
          <img src={snack} className="basis-[30%] w-[30%] py-5" alt="Lunch" />
        </div>

        <h1 className="text-2xl font-semibold pt-2">Dinner</h1>
        <div className="flex">
          <div className="basis-4/5 pb-4 pt-5">
            <p className="text-gray-500">Total: 400 calories</p>
            <h1 className="font-semibold py-2">Baked salmon with quinoa and steamed broccoli</h1>
            <p className="text-gray-500">3 oz salmon, 1/2 cup quinoa, 1 cup steamed broccoli, 1 tbsp olive oil</p>
          </div>
          <img src={dinner} className="basis-[30%] w-[30%] py-5" alt="Dinner" />
        </div>
      </div>
    </div>
  );
};

export default Plan;
