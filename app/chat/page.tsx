'use client';

import React, { useRef } from "react";
import { Send } from "lucide-react";

const ChatPage = () => {
  const messagesEndRef = useRef(null);

  const messages = [
    { text: "Hello! How can I assist you today?", sender: "bot" },
    { text: "I need help with my project.", sender: "user" },
    { text: "Sure! What do you need help with?", sender: "bot" }
  ];

  return (
    <div className="flex h-screen">

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <header className="bg-[#4a4a4a] shadow p-4 text-lg font-semibold">
        <h1 className="font-bold text-[1.5rem] text-white">File Name</h1>
        </header>
        
        {/* Messages Display */}
        <main className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-2 rounded-xl max-w-[22%] ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end ml-auto"
                  : "bg-gray-200"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </main>
        
        {/* Input and Send Button */}
        <footer className="p-4 rounded-xl bg-white flex items-center ">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
          <button
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center opacity-50 cursor-not-allowed"
            disabled
          >
            <Send size={18} className="mr-1" /> Send
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ChatPage;
