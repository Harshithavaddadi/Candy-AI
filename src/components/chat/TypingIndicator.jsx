import React from "react";

const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-2 px-4 text-[#B8B8B8] text-sm italic animate-pulse">
      <span className="w-2 h-2 bg-[#FF5CA8] rounded-full animate-bounce delay-0" />
      <span className="w-2 h-2 bg-[#FF87C5] rounded-full animate-bounce delay-150" />
      <span className="w-2 h-2 bg-[#C84BFF] rounded-full animate-bounce delay-300" />
      <span>Candy AI is thinking...</span>
    </div>
  );
};

export default TypingIndicator;
