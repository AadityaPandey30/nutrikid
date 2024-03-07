import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const navigate = useNavigate();
const Signup = () =>{
    return(
        <div className="container">
            <div className="login p-5 w-[50%] min-w-[320px] m-auto mt-[10vh] rounded-[10px] text-center">
                <h1 className="text-3xl mb-8 font-semibold">SignUp Here</h1>
                <input type="text" className="w-full mb-6 h-8 px-3 py-6 rounded-[10px] bg-yellow-50 text-yellow-700" placeholder="Enter UserName"/>
                <input type="email" className="w-full mb-6 h-8 px-3 py-6 rounded-[10px] bg-yellow-50 text-yellow-700" placeholder="Enter Email"/>
                <input type="password" className="w-full mb-6 h-8 px-3 py-6 rounded-[10px] bg-yellow-50 text-yellow-700" placeholder="Enter Password"/>
                <input type="password" className="w-full mb-6 h-8 px-3 py-6 rounded-[10px] bg-yellow-50 text-yellow-700" placeholder="Confirm Password"/>
                <div className="text-right">
                <button className="rounded-[8px] px-7 py-2 bg-[#F5BF26] font-bold text-black">SignUp</button>
                </div>
                <p className="py-4 px-1 text-center">Already have an account? <a href="./login" className="underline text-yellow-700">Login</a> here</p>
            </div>
        </div>
    )
}


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/v1/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, passwordConfirm }),
      });
      if (!response.ok) {
        throw new Error("Signup failed");
      }
      const data = await response.json();
      localStorage.setItem("jwt", data.token); // Store token in local storage
      localStorage.setItem("user", JSON.stringify(data.data.user)); // Store user details in local storage
      navigate("/");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="container">
      <div className="login p-5 w-[50%] min-w-[320px] m-auto mt-[10vh] rounded-[10px] text-center">
        <h1 className="text-3xl mb-8 font-semibold">SignUp Here</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-6 h-8 px-3 py-6 rounded-[10px] bg-yellow-50 text-yellow-700"
            placeholder="Enter Username"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-6 h-8 px-3 py-6 rounded-[10px] bg-yellow-50 text-yellow-700"
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 h-8 px-3 py-6 rounded-[10px] bg-yellow-50 text-yellow-700"
            placeholder="Enter Password"
            required
          />
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => setpasswordConfirm(e.target.value)}
            className="w-full mb-6 h-8 px-3 py-6 rounded-[10px] bg-yellow-50 text-yellow-700"
            placeholder="Confirm Password"
            required
          />
          <h1 className="text-1xl pt-4 pb-2 text-right" >Enter some details of your Child</h1>
          <div className="text-right">
                    <input type="text" placeholder="Height(cm)" className="bg-[#ffde85] rounded-[4px] py-2 w-[95px] text-center px-1 mx-2"/>
                    <input type="text" placeholder="Weight(cm)" className="bg-[#ffde85] rounded-[4px] py-2 w-[95px] text-center px-1 mx-2"/>
                    <select name="age" id="age" className='px-5 py-2.5 md:mt-3 mt-1 md:mb-4 mb-1 ml-2' required >
                        <option value="None" selected>Age</option>
                        <option value="1-3">1-3</option>
                        <option value="3-5">3-5</option>
                        <option value="5-7">5-7</option>
                        <option value="8">8</option>
                    </select>
                </div>
          <div className="text-right">
            <button
              type="submit"
              className="rounded-[8px] px-7 py-2 bg-[#F5BF26] font-bold text-black"
            >
              SignUp
            </button>
          </div>
        </form>
        <p className="py-4 px-1 text-center">
          Already have an account?{" "}
          <a href="/login" className="underline text-yellow-700">
            Login
          </a>{" "}
          here
        </p>
      </div>
    </div>
  );
};

export default Signup;
