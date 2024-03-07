import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      localStorage.setItem("jwt", data.token); // Store token in local storage
      localStorage.setItem("user", JSON.stringify(data.data.user)); // Store user details in local storage
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="container">
      <div className="login p-5 w-[50%] min-w-[320px] m-auto mt-[10vh] rounded-[10px] text-center">
        <h1 className="text-4xl font-bold text-left py-2">Hello,</h1>
        <h1 className="text-3xl mb-8 font-semibold text-left">Welcome Back!</h1>
        <form onSubmit={handleSubmit} className="login-form">
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
          <div className="text-right">
            <button
              type="submit"
              className="rounded-[8px] px-7 py-2 bg-[#F5BF26] font-bold text-black"
            >
              Login
            </button>
          </div>
        </form>
        <p className="py-4 px-1 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="underline text-yellow-700">
            SignUp
          </a>{" "}
          here
        </p>
      </div>
    </div>
  );
};

export default Login;
