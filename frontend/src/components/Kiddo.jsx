import fever from "../images/fever.jpg"
import cough from "../images/cough.jpg"



const Kiddo = () =>{
    return(
        <div className="container px-[5%]">
            <div className="healthy my-[5%]">
                <h1 className="text-white font-bold text-4xl py-2">Create a Healthy Future for Your Child</h1>
                <p className="text-white text-2xl py-1">Nutrition is essential for your child&apos;s growth and development. TinyTummy makes it easy to provide the right nutrients at the right time.</p>
                <div className="searchbar bg-blue-100 border-black w-fit rounded-[10px] py-2 pl-1 my-2">
                    <input type="search" className="px-4 py-3 bg-transparent rounded-[10px] w-[45%] min-w-[200px]" placeholder="Search for a meal plan or health issue" />
                    <button className="bg-[#F5BF26] text-black font-bold px-5 py-2 ml-2 rounded-[10px] hover:bg-[#ffdb76]">Search</button>
                </div>
            </div>
            <h1 className="text-2xl font-semibold py-8">Common Health Issues</h1>
                <div className="diseases">
                    <div className="flex py-4">
                        <img src={fever} className="w-[50%] max-w-[300px] pr-5" />
                        <h1 className="text-2xl font-semibold py-[60px]">Fever</h1>
                        <div className="">
                        <button className="bg-[#F5BF26] text-black font-bold px-5 py-2 ml-2 rounded-[10px] hover:bg-[#ffdb76]">View Plan</button>
                        </div>
                    </div>
                    <div className="flex py-4">
                        <img src={cough} className="w-[50%] max-w-[300px] pr-5" />
                        <h1 className="text-2xl font-semibold py-[60px]">Cough</h1>
                        <div className="text-end">
                        <button className="bg-[#F5BF26] text-black font-bold px-5 py-2 ml-2 rounded-[10px] hover:bg-[#ffdb76]">View Plan</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Kiddo;