
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

export default Signup