import { GiPlanetCore } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { MdSportsKabaddi } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";

import ChatContainer from "@/components/chat/ChatContainer";
import ChatInput from "@/components/chat/ChatInput";
import useCandyChat from "@/utils/usecandychat";
import { useState } from "react";

const CandyIcon = () => (
  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF5CA8] via-[#FF87C5] to-[#C84BFF] p-1 shadow-[0_0_24px_rgba(200,75,255,0.45)]">
    <div className="w-full h-full rounded-full bg-[#0D0D0D]/85 flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 80 80"
        className="w-10 h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="28" fill="#FFFFFF" />
        <path
          d="M54 30.5C54 40 47.5 45 40 45c-4.5 0-9.5-2-12-6.5-2-3.8-1.5-8.3 1.2-11.9 3.4-4.4 8.9-6.4 14.2-5.4 4.3 0.8 7.8 3.7 10 7.8"
          fill="#FF5CA8"
        />
        <path
          d="M44.6 28.2c1.4 1.5 3.3 2.4 5.5 2.4 3.8 0 6.9-3.1 6.9-6.9 0-2.8-1.7-5.2-4.2-6.3-5.1-2.4-11.5-1-14.6 3.5-2.8 4-1.7 9.4 2.2 12.5Z"
          fill="#FF87C5"
        />
        <path
          d="M45 47.5c0 4.5 5.4 6 5.4 12 0 1.9-1.4 3.4-3.2 3.4-1.8 0-3.2-1.5-3.2-3.4 0-5.6 4.6-6.8 4.6-12 0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2Z"
          fill="#FF5CA8"
        />
        <path
          d="M28 41.5c0 7.3 6 13.3 13.3 13.3 7.3 0 13.3-6 13.3-13.3 0-7.3-6-13.3-13.3-13.3-5 0-9.3 3-11.3 7.3"
          stroke="#FF5CA8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);

const cardData = [
  { text: "What is Coding?\nHow can we learn it", icon: <IoCodeSlash /> },
  {
    text: "What is the red\nplanet of the Solar System?",
    icon: <GiPlanetCore />,
  },
  { text: "Who is the founder\nof Facebook?", icon: <FaFacebookF /> },
  { text: "How would you kick\nthe buddy?", icon: <MdSportsKabaddi /> },
];

const Index = () => {
  const [inputVal, setinputVal] = useState("");
  const [hasTyped, sethasTyped] = useState(false);
  const { messages, isTyping, sendMessage, error, clearError } = useCandyChat();

  const handleSend = async () => {
    await sendMessage(inputVal);
    setinputVal("");
    sethasTyped(true);
  };

  return (
    <div className="relative w-screen min-h-screen max-h-screen bg-[#0D0D0D] text-[#F5F5F5] flex flex-col items-center px-4 pt-10 pb-[120px] overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(200,75,255,0.18),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(255,92,168,0.14),transparent_28%)] before:pointer-events-none">
      {/* Header - Centered for initial view, left-aligned for chat */}
      {!hasTyped ? (
        <div className="relative z-10 flex justify-center mb-10">
          <h1 className="flex items-center justify-center gap-3 text-5xl font-extrabold tracking-wide text-[#F5F5F5] drop-shadow-[0_0_18px_rgba(200,75,255,0.45)]">
            <CandyIcon />
            Candy
          </h1>
        </div>
      ) : (
        <div className="absolute top-10 left-4 z-10">
          <h1 className="flex items-center gap-3 text-3xl font-extrabold tracking-wide text-[#F5F5F5] drop-shadow-[0_0_18px_rgba(200,75,255,0.45)]">
            <CandyIcon />
            Candy
          </h1>
        </div>
      )}

      {/* Cards */}
      {!hasTyped && (
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-6xl">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative bg-[#151015]/85 backdrop-blur-md rounded-xl p-6 h-[22vh] border border-[#FF5CA8]/20 shadow-[0_0_14px_rgba(200,75,255,0.18)] hover:border-[#FF87C5]/45 hover:shadow-[0_0_24px_rgba(200,75,255,0.35)] transition-all duration-300 cursor-pointer"
              onClick={() => {
                setinputVal(card.text.replace(/\n/g, " "));
                handleSend();
              }}
            >
              <p className="text-[17px] whitespace-pre-line leading-relaxed text-[#F5F5F5]/90">
                {card.text}
              </p>
              <div className="absolute bottom-3 right-4 text-[#FF87C5] text-xl">
                {card.icon}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Chat Thread */}
      {hasTyped && (
        <div className="relative z-10 w-full max-w-4xl mt-10 flex flex-col flex-1 min-h-0">
          <div className="backdrop-blur-md rounded-xl p-4 flex-1 min-h-0 overflow-hidden">
            <ChatContainer messages={messages} isTyping={isTyping} />
          </div>

          {/* Error Display */}
          {error && (
            <div className="mt-4 p-3 bg-[#FF5CA8]/15 border border-[#FF5CA8]/50 rounded-lg text-[#F5F5F5] text-sm">
              <div className="flex items-center justify-between">
                <span>⚠️ {error}</span>
                <button
                  onClick={clearError}
                  className="ml-2 text-[#FF87C5] hover:text-[#F5F5F5] text-lg"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Chat Input */}
      <ChatInput
        value={inputVal}
        onChange={setinputVal}
        onSend={handleSend}
        hasTyped={hasTyped}
        setHasTyped={sethasTyped}
        // onKeyPress={handleKeyPress}
      />

      {/* Footer - Always visible below input */}
      <div className="fixed bottom-20 left-0 right-0 flex justify-center px-4 pb-4 z-40">
        <div className="last-mssg max-w-3xl">
          <p className="text-center text-sm text-[#B8B8B8] italic">
            Candy AI is learning—sometimes it gets things wrong. But every mistake
            is a step toward getting sweeter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
