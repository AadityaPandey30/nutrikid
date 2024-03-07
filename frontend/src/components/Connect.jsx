

const Connect = () => {
    return(
        <div className="container px-[5%] py-8">
            <div className="community ">
                <h1 className="text-3xl font-bold py-4">Ask the Community</h1>
                <p className="text-gray-400">Post your questions here and get advice from our community, which includes pediatricians and nutritionists</p>
                <div className="border py-6 text-end w-[70%] min-w-[310px]">
                    <input type="text" className="px-2 py-3 rounded-half bg-slate-50 w-full h-fit" placeholder="Ask a question. For example, &apos;How can I get my child to eat more fruits and vegetables?&apos; " /><br></br>
                    <button className="bg-[#F5BF26] text-black font-bold px-8 py-2 my-2 mx-auto rounded-[10px] hover:bg-[#ffdb76]">Post</button>
                </div>
            </div>
        </div>
    )
}

export default Connect;