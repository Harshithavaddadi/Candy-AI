import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";

const ChatContainer = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollButton(!isNearBottom);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div
        ref={containerRef}
        className="px-4 py-6 overflow-y-auto flex flex-col gap-4 backdrop-blur-md rounded-xl h-full max-h-[60vh] scroll-smooth hide-scrollbar"
      >
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} role={msg.role} message={msg.content} />
        ))}

        {isTyping && <TypingIndicator />}

        {/* Invisible element to scroll to */}
        <div ref={messagesEndRef} />
      </div>

      {/* Scroll to bottom button */}
      {showScrollButton && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-4 right-4 bg-[#FF5CA8]/15 backdrop-blur-md hover:bg-[#FF87C5]/25 rounded-full p-3 text-[#F5F5F5] transition-all duration-200 shadow-[0_0_16px_rgba(200,75,255,0.25)] border border-[#FF5CA8]/30"
          aria-label="Scroll to bottom"
        >
          <BiChevronDown className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ChatContainer;
