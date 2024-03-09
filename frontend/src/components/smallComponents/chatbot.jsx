// Chatbot.jsx
import { useState } from 'react';
import robo from "../../images/robot.png";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(true);
  const [roboSize, setRoboSize] = useState(20);
  const [inputText, setInputText] = useState('');
  const [chatContent, setChatContent] = useState([]);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
    setRoboSize(showChatbot ? 10 : 20);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendClick = () => {
    if (inputText.trim() !== '') {
      setChatContent([...chatContent, inputText]);
      setInputText('');
    }
  };

  return (
    <div className="chat-cont">
      {showChatbot && (
        <div className='chatbot p-5'>
          <div className="chatbot-inner p-3 pt-1">
            <h1 className="text-2xl font-bold text-green-900 text-center">Need Health tips?</h1>
            <div className='h-[90%] pl-1 bg-yellow-100 my-3 rounded-[20px] pb-4'>
              <div className='chats h-[90%]'>
                {chatContent.map((message, index) => (
                  <div key={index} className='chat-message'>{message}</div>
                ))}
              </div>
              <div className='ask flex'>
                <input
                  type="text"
                  value={inputText}
                  onChange={handleInputChange}
                  placeholder='Ask queries...'
                  className='py-3 rounded-[12px] px-2 w-[80%]'
                />
                <button
                  className="bg-[#F5BF26] text-black font-bold px-5 py-2 mx-2 rounded-[10px] hover:bg-[#ffdb76]"
                  onClick={handleSendClick}
                >
                  Send
                </button>
              </div>
            </div>
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
