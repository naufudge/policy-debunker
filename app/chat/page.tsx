// 'use client';

// import React, { useState, useEffect, useRef } from "react";
// import { Menu, X, Send } from "lucide-react";

// const ChatPage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [messages, setMessages] = useState(() => {
//     return JSON.parse(localStorage.getItem("messages")) || [];
//   });
//   const [input, setInput] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     localStorage.setItem("messages", JSON.stringify(messages));
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const sendMessage = () => {
//     if (input.trim() === "") return;
//     setMessages([...messages, { text: input, sender: "user" }]);
//     setInput("");
//     setTimeout(() => {
//       setMessages((prev) => [...prev, { text: "Hello! How can I help?", sender: "bot" }]);
//     }, 1000);
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div
//         className={`bg-white shadow-lg p-4 transition-all duration-300 overflow-hidden ${
//           sidebarOpen ? "w-64" : "w-16"
//         }`}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//             {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//         {sidebarOpen && <p className="text-lg font-semibold">Chat Sidebar</p>}
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 flex flex-col">
//         <header className="bg-white shadow p-4 text-lg font-semibold">
//           OpenStats
//         </header>
        
//         {/* Messages Display */}
//         <main className="flex-1 p-4 overflow-y-auto">
//           {messages.length === 0 ? (
//             <p className="text-gray-600">No messages yet...</p>
//           ) : (
//             messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`p-2 my-2 rounded-lg max-w-[75%] ${
//                   msg.sender === "user"
//                     ? "bg-blue-500 text-white self-end ml-auto"
//                     : "bg-gray-200"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))
//           )}
//           <div ref={messagesEndRef} />
//         </main>
        
//         {/* Input and Send Button */}
//         <footer className="p-4 bg-white flex items-center">
//           <input
//             type="text"
//             placeholder="Type a message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//             className="flex-1 border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             onClick={sendMessage}
//             className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
//           >
//             <Send size={18} className="mr-1" /> Send
//           </button>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;

