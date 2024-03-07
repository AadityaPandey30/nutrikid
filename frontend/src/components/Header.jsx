import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("jwt"); // Use removeItem instead of clear to remove only the jwt item
    navigate("/");
  };

  return (
    <header className="bg-white font-semibold border-y-2">
      <nav className="flex justify-between items-center w-[94%] h-20 p-1 mx-auto">
        <div className="w-[10%]">
          <img src={logo} alt="Logo" />
        </div>
        {toggle && (
          <div className="navigator md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 top-[10%] md:w-fit w-full basis-1/2 flex text-left px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 p-[3%] md:m-auto">
              <li>
                <Link className="hover:text-gray-500" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" to="/suggest">
                  Suggest
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" to="/connect">
                  Connect
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" to="/costomization">
                  Customize
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" to="/costomization">
                  Kiddo
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div className="flex items-center gap-2">
          {jwt ? (
            <button
              className="bg-[#F5BF26] text-black font-bold px-5 py-2 mx-2 rounded-[10px] hover:bg-[#ffdb76]"
              onClick={logout}
            >
              Logout
            </button>
          ) : null}
          {!jwt && (
            <>
              <Link to="/login">
                <button className="bg-[#F5BF26] text-black font-bold px-5 py-2 mx-2 rounded-[10px] hover:bg-[#ffdb76]">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-[#F5BF26] text-black font-bold px-5 py-2 mx-2 rounded-[10px] hover:bg-[#ffdb76]">
                  SignUp
                </button>
              </Link>
            </>
          )}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdiWUPz5_LufaBXGgEooZfwWDOmfFLmpf2Kh5C_I3CICyUd3N5TwUH8M_DdQ&s"
            alt="Menu Icon"
            className="bar size-6"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
