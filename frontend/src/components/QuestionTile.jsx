import React, { useState } from "react";

const QuestionTile = ({ questionItem, loading, handlePostComment }) => {
  const [comment, setComment] = useState(""); // Local state for comment
  const [expanded, setExpanded] = useState(false); // Local state to track whether the question is expanded

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePost = () => {
    handlePostComment(questionItem._id, comment);
    setComment(""); // Clear the comment after posting
  };

  const toggleExpanded = () => {
    setExpanded(!expanded); // Toggle the expanded state
  };

  return (
    <div className="border p-4 mb-6">
      <div className="question" onClick={toggleExpanded}> {/* Add onClick event listener */}
        <h3 className="text-lg font-bold">{questionItem.body}</h3>
        {/* Input text field for posting comments */}
        <input
          type="text"
          className="comment-input px-2 py-1 mt-2 rounded bg-gray-100 w-full"
          placeholder="Write a comment..."
          value={comment}
          onChange={handleCommentChange}
        />
        {/* Button to post the comment */}
        <button
          className="bg-[#F5BF26] text-black font-bold px-4 py-1 mt-2 rounded hover:bg-[#ffdb76]"
          onClick={handlePost}
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Comment"}
        </button>
      </div>
      {/* Render comments if the question is expanded */}
      {expanded && questionItem.comments && (
        <div className="mt-4">
          {questionItem.comments.map((comment) => (
            <div key={comment._id} className="border p-2 mt-2">
              <p className="text-gray-600">{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionTile;
