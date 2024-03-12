import { Link } from "react-router-dom";
import fever from "../images/fever.jpg";
import cough from "../images/cough.jpg";
import axios from "axios";

const Kiddo = () => {
  return (
    <div className="container px-[5%]">
      <div className="healthy my-[5%]">
        <div className="new-mask">
          <h1 className="text-white font-bold text-4xl py-2">Create a Healthy Future for Your Child</h1>
          <p className="text-white text-2xl py-1">Nutrition is essential for your child&apos;s growth and development. NutriKids makes it easy to provide the right nutrients at the right time.</p>
          <div className="searchbar bg-blue-100 border-black w-fit rounded-[10px] py-2 pl-1 my-2">
            <input type="search" className="px-4 py-3 bg-transparent rounded-[10px] w-[45%] min-w-[200px]" placeholder="Search for a meal plan or health issue" />
            <button className="bg-[#F5BF26] text-black font-bold px-5 py-2 ml-2 rounded-[10px] hover:bg-[#ffdb76]">Search</button>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-semibold py-8">Common Health Issues</h1>
      <div className="diseases">
        <div className="md:flex flex-row py-4">
          <img src={fever} className="`md:w-[50%] w-full max-w-[400px] pr-5" alt="Fever" />
          <h1 className="text-2xl font-semibold md:py-[60px] py-1 w-[50px]">Fever</h1>
          <div className="text-end w-[200px]">
            <Link to="/cough/plan" className="bg-[#F5BF26] text-black font-bold px-5 py-2 my-[60px] ml-2 rounded-[10px] hover:bg-[#ffdb76]">View Plan</Link>
          </div>
        </div>
        <div className="md:flex flex-row py-4">
          <img src={cough} className="md:w-[50%] w-full max-w-[400px] pr-5" alt="Cough" />
          <h1 className="text-2xl font-semibold md:py-[60px] py-1 w-[50px]">Cough</h1>
          <div className="text-end w-[200px]">
            <Link to="/cough/plan" className="bg-[#F5BF26] text-black font-bold px-5 py-2 my-[60px] ml-2 rounded-[10px] hover:bg-[#ffdb76]">View Plan</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kiddo;



