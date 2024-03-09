import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionTile from "./QuestionTile";

const Connect = () => {
  const [loading, setLoading] = useState(false);
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    fetchQuestions(); // Fetch questions when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  const fetchQuestions = async () => {
    try {
      const token = localStorage.getItem('jwt').trim();
      const response = await axios.get("http://localhost:8000/api/v1/chat/community", {
        headers: {
          Authorization: `Bearer${token}`, // Add a space between "Bearer" and the token
        },
      });
      setQuestionsList(response.data.questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handlePostQuestion = async (question) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('jwt').trim();
      const response = await axios.post(
        "http://localhost:8000/api/v1/chat/community",
        { body: question },
        {
          headers: {
            Authorization: `Bearer${token}`, // Add a space between "Bearer" and the token
          },
        }
      );
      setQuestionsList([...questionsList, response.data]);
    } catch (error) {
      console.error("Error posting question:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePostComment = async (questionId, comment) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('jwt').trim();
      const response = await axios.post(
        `http://localhost:8000/api/v1/chat/community/${questionId}/comments`,
        { body: comment },
        {
          headers: {
            Authorization: `Bearer${token}`, // Add a space between "Bearer" and the token
          },
        }
      );
      const updatedQuestions = questionsList.map((q) => {
        if (q._id === questionId) {
          q.comments.push(response.data.comment);
        }
        return q;
      });
      setQuestionsList(updatedQuestions);
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setLoading(false);
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
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handlePostQuestion(e.target.value);
              }
            }}
          />
          <br />
          <button
            className="bg-[#F5BF26] text-black font-bold px-8 py-2 my-2 mx-auto rounded-[10px] hover:bg-[#ffdb76]"
            onClick={() => handlePostQuestion(question)}
            disabled={loading}
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </div>

        <div className="mt-8">
          {questionsList.map((questionItem) => (
            <QuestionTile
              key={questionItem._id}
              questionItem={questionItem}
              loading={loading}
              handlePostComment={handlePostComment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connect;
