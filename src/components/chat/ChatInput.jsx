import React from "react";
import { BiSend } from "react-icons/bi";

const ChatInput = ({ value, onChange, onSend, hasTyped, setHasTyped }) => {
  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center px-4 z-50">
      <div className="w-full max-w-3xl bg-[#151015]/85 backdrop-blur-md rounded-full flex items-center px-5 py-3 shadow-[0_0_18px_rgba(200,75,255,0.2)] hover:shadow-[0_0_28px_rgba(200,75,255,0.36)] border border-[#FF5CA8]/25 transition-all duration-300">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            if (!hasTyped) setHasTyped(true);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && value.trim()) {
              onSend();
            }
          }}
          placeholder="Write your message here..."
          className="text-[15px] text-[#F5F5F5] placeholder:text-[#B8B8B8] bg-transparent flex-1 outline-none border-none px-2"
        />

        <button
          onClick={onSend}
          disabled={!value.trim()}
          className={`ml-3 ${
            value.trim()
              ? "cursor-pointer bg-[#FF5CA8] hover:bg-[#FF87C5] shadow-[0_0_16px_rgba(200,75,255,0.45)]"
              : "cursor-not-allowed bg-[#FF5CA8]/35"
          } px-4 py-2 rounded-full text-sm font-semibold text-[#0D0D0D] hover:scale-105 transition-all duration-200`}
        >
          <BiSend />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
