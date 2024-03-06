// Chatbot.jsx
import { useState } from 'react';
import robo from "../../images/robot.png";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(true);
  const [roboSize, setRoboSize] = useState(20);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
    setRoboSize(showChatbot ? 10 : 20);
  };

  return (
    <div className="chat-cont">
      {showChatbot && (
        <div className='chatbot p-5'>
          <div className="chatbot-inner p-3 pt-1">
            <h1 className="text-2xl font-bold text-green-900 text-center">Need Health tips?</h1>
            <div className='h-[87%] bg-yellow-100 my-3 rounded-[20px]'></div>
          </div>
        </div>
      )}
      <img
        src={robo}
        alt="Robot"
        className={`robo ${!showChatbot ? 'robo-hidden' : ''}`}
        style={{ width: `${roboSize}%` }}
        onClick={toggleChatbot}
      />
    </div>
  );
};

export default Chatbot;
