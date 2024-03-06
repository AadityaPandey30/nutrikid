
const Login = () =>{
    return(
        <div className="container">
            <div className="login p-5 w-[50%] min-w-[320px] m-auto mt-[10vh] rounded-[10px] text-center">
                <h1 className="text-4xl font-bold text-left py-2">Hello,</h1>
                <h1 className="text-3xl mb-8 font-semibold text-left">Welcome Back!</h1>
                <input type="email" className="w-full mb-6 h-8 px-3 py-6 rounded-[10px] bg-yellow-50 text-yellow-700" placeholder="Enter Email"/>
                <input type="password" className="w-full mb-6 h-8 px-3 py-6 rounded-[10px] bg-yellow-50 text-yellow-700" placeholder="Enter Password"/>
                <div className="text-right">
                    <button className="rounded-[8px] px-7 py-2 bg-[#F5BF26] font-bold text-black">Login</button>
                </div>
                <p className="py-4 px-1 text-left">Don&apos;t have an account? <a href="./signup" className="underline text-blue-900">SignUp</a> here</p>
            </div>
        </div>
    )
}

export default Login