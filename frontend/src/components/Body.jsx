import Blog from "./smallComponents/Blog";

const Body = () => {


    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

    const handleGetStarted = async (sectionId) => {
        const jwt = localStorage.getItem("jwt");
        try {
          let response = await fetch("http://localhost:3000/verifyToken", {
            method: "get",
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });
          if (!response.ok) {
            throw new Error("Failed to verify token");
          }
          const data = await response.json();
          if (data.message === "Token is valid.") {
            scrollToSection(sectionId);
          } else {
            throw new Error(data.error || "Please Login");
          }
        } catch (error) {
          console.error("Error occurred:", error.message);
          alert("An error occurred. Please login.");
        //   navigate("/login");
        }
      };

    return (
        <div className="container">
            <div className="intro rounded-[20px] my-10">
                <div className="mask rounded-[20px]">
                <div className="intro-text m-auto">
                    <h1 className="text-4xl  font-bold my-4 text-white">Personalized nutrition for kids</h1>
                    <p className="text-1xl my-3 text-white">Help your child grow strong and healthy with delicious, personalized recipes. Created by experts, loved by kids.</p>
                    <button className="bg-[#F5BF26] text-black font-bold px-5 py-2 my-3 rounded-[10px] hover:bg-[#ffdb76]"
                    onClick={() => handleGetStarted("section1")}>
                  Get Started
                </button>
                </div>
                </div>
            </div>

            <div className="question px-[5%]">
                <h1 className="text-2xl font-bold mb-4 px-2">Why personalized nutrition?</h1>
                <p className="text-1xl px-2">From picky eaters to food allergies, every child&apos;s nutritional needs are different. Our platform uses AI technology to provide personalized nutrition recommendations for kids, helping parents ensure their little ones get the nutrients they need to grow up healthy and strong.</p>
            </div>

            <div className="concerns px-[5%] py-8">
                <h1 className="text-2xl font-bold mb-4 px-2">Common Health Concerns</h1>
                <div className="boxes">
                <div className="box">
                    <p className="font-bold">Picky Eaters</p>
                    <p>We&apos;ll help you find nutritious foods your child will actually enjoy. No more  mealtime battles!</p>
                </div>
                <div className="box">
                    <p className="font-bold">Allergies</p>
                    <p>We provide allergy-friendly  recipes and guidance for kids with food sensitivities.</p>
                </div>
                <div className="box">
                    <p className="font-bold">Nutrient Deficiencies</p>
                    <p>Our meal plans are designed to meet your child&apos;s specific nutrient needs, so you can be sure they&apos;re getting all the vitamins and minerals they need to grow up healthy and strong.</p>
                </div>
                <div className="box">
                    <p className="font-bold">Overweight/Obesity</p>
                    <p>Our platform provides personalized nutrition recommendations to help you manage your child&apos;s weight and prevent childhood obesity.</p>
                </div>
                </div>
            </div>
            <hr></hr>

            <div className="trial px-[5%] py-10">
                <h1 className="text-2xl font-bold mb-4">Start your free trial today</h1>
                <p className="text-1xl">Join the thousands of parents who trust NutriKids to help their children grow up strong and healthy.</p>
                <button className="bg-[#F5BF26] text-black font-bold px-5 py-2 my-3 rounded-[10px] hover:bg-[#ffdb76]"
                    onClick={() => handleGetStarted("section1")}>
                  Get Started
                </button>
            </div>

            <Blog />
            
        </div>
    )
}

export default Body;