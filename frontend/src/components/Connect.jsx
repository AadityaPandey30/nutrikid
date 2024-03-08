import { useState } from "react";
import axios from "axios";

const Connect = () => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePostQuestion = async () => {
    setLoading(true); // Set loading state to true while sending the request
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('jwt').trim();

      // Make a POST request to the backend API endpoint with the authentication token and question data
      console.log(token);
      const response = await axios.post(
        "http://localhost:8000/api/v1/chat/community",

        { body: question }, // Send the question body in the request body
        {
          headers: {
            Authorization:`Bearer${token}`,
        //     Authorization:
        //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZThkYzQ5N2IxMzYzZWRiMGRkOWQ2ZCIsImlhdCI6MTcwOTg5NzU0NywiZXhwIjoxNzE3NjczNTQ3fQ.zRPseyFVnxxwUwDMav5HuQDJYvoKRybUPrvQT015yUc",
        //   },
          },
        }
      );

      console.log(response.data);
      // Optionally, you can handle successful response here, e.g., display a success message
    } catch (error) {
      console.error("Error posting question:", error);
      // Optionally, you can handle errors and show an error message
    } finally {
      setLoading(false); // Set loading state back to false after request completion
    }
  };

  return (
    <div className="container px-[5%] py-8">
      <div className="community">
        <h1 className="text-3xl font-bold py-4">Ask the Community</h1>
        <p className="text-gray-400">
          Post your questions here and get advice from our community, which
          includes pediatricians and nutritionists
        </p>
        <div className="border py-6 text-end w-[70%] min-w-[310px]">
          <input
            type="text"
            className="px-2 py-3 rounded-half bg-slate-50 w-full h-fit"
            placeholder="Ask a question. For example, 'How can I get my child to eat more fruits and vegetables?'"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <br></br>
          <button
            className="bg-[#F5BF26] text-black font-bold px-8 py-2 my-2 mx-auto rounded-[10px] hover:bg-[#ffdb76]"
            onClick={handlePostQuestion}
            disabled={loading} // Disable the button while the request is being sent
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
