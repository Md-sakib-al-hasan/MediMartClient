"use client";
import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { RiTelegram2Line } from 'react-icons/ri';
import { Button } from '@/components/ui/button';
import { MdClear } from 'react-icons/md';

// Define a type for the message object
interface Message {
  text: string;
  time: string;
  sender: string;
}

const MessengerChatPreview = () => {
  const [isOpen ,setIsOpen] = useState(false)
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello, how are you?', time: '0:08', sender: 'Them' },
    { text: 'I am good, thanks! How about you?', time: '0:09', sender: 'You' },
  ]); 
  

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add the new message to the messages array
      setMessages([...messages, { text: message, time: '0:09', sender: 'You' }]);
      setMessage('');
    }
  };

  return (
     <div>
        <div>
               <Button onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 px-96 sm:bottom-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-500 hover:bg-teal-600 text-white flex items-center justify-center shadow-lg"
                aria-label="Back to top"
              >
                <ChevronUp className="h-5 w-5" />
              </Button>
        </div>

         {/* main boy */}
        {isOpen &&
        <div className="fixed bottom-4 right-4 w-80 h-[32rem] shadow-lg rounded-lg bg-white border border-gray-300 overflow-hidden z-50 flex flex-col">
          <button onClick={() => setIsOpen(false)}   className="absolute right-0 top-0 text-gray-500 hover:text-gray-800 transition-colors text-2xl">
            <MdClear className=" text-white rounded-full" />
            </button>
      {/* Header */}
      <div className="p-3 bg-[#24aeb1] text-white font-bold text-lg">
        <h2 className="text-center">MediMart</h2>
      </div>

      {/* Message Body */}
      <div className="p-3 text-sm flex-1 overflow-y-auto">
        {/* Display Messages */}
        {messages.map((msg, index) => (
          <div key={index} className={`mb-3 flex  ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-center ${msg.sender === 'You' ? 'bg-blue-100' : 'bg-gray-100'} rounded-md p-2 w-fit`}>
              <span className="text-sm">{msg.text}</span>
            </div>
           
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="border-t border-gray-200 p-2 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-3 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#24aeb1] text-sm"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="bg-[#24aeb1] text-white px-4 rounded-full text-sm py-2"
        >
          <RiTelegram2Line />
        </button>
      </div>
         </div>}
     </div>
  );
};

export default MessengerChatPreview;
