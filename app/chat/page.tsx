"use client";

import React, { useRef, useState } from "react";
import { Paperclip, Send } from "lucide-react";
import axios from "axios";
import Forecast from "@/components/Forecast";

type CurrentConvo = {
  text: string,
  sender: "bot" | "user",
  forecast: string | null
}

const ChatPage = () => {
  const messagesEndRef = useRef(null);

  const [currentConvo, setCurrentConvo] = useState<CurrentConvo[]>([])
  const [message, setMessage] = useState("")
  // const [loading, setLoading] = useState(false)

  const handleUserChatSend = async (chat: string) => {
    let tempCurrentConvo = currentConvo
    tempCurrentConvo = [...currentConvo, {
      text: chat,
      sender: "user",
      forecast: ""
    },
    {
      text: "Typing...",
      sender: "bot",
      forecast: "",
    }  
  ];

    setCurrentConvo(tempCurrentConvo)

    setMessage("")
    const response = await axios.post("/api/chat", {query: chat})
    const responseData = response.data
    
    tempCurrentConvo.pop()

    tempCurrentConvo = [...tempCurrentConvo, {
      text: responseData.response,
      sender: "bot",
      forecast: responseData.forecast
    }]

    setCurrentConvo(tempCurrentConvo)
  }

  return (
    <div className="flex h-full">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-[#4a4a4a] bg-opacity-50 rounded-xl">
        <header className="shadow p-4 px-6 text-lg font-semibold">
          <h1 className="font-bold text-[1.5rem] text-white">Insight</h1>
        </header>

        {/* Messages Display */}
        <main className="flex-1 p-6 overflow-y-auto">
          {currentConvo.map((msg, index) => (
            <div
              key={index}
              className={`p-4 my-2 rounded-xl max-w-[35%] bg-opacity-90 flex flex-col gap-2 ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end ml-auto"
                  : "bg-gray-200"
              }`}
            >
              <p>{msg.text}</p>
              {msg.forecast && <div><Forecast message={msg.forecast} /></div>}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </main>

        {/* Input and Send Button */}
        <footer className="p-4 px-6 rounded-xl bg-[#4a4a4a] flex items-center ">
          <input
            id="chatBox"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-white"
          />
          <div className="flex gap-4">
            <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
              <Paperclip size={18} />
            </button>

            <button
              onClick={() => {handleUserChatSend(message)}}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <Send size={18} className="mr-1" /> Send
            </button>

          </div>
        </footer>
      </div>
    </div>
  );
};

export default ChatPage;
