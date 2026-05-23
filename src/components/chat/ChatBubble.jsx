import React, { useState } from "react";
import { BiCopy, BiCheck } from "react-icons/bi";

// CodeBlock component for displaying code with copy functionality
const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="relative group my-3">
      {/* Language label */}
      {language && (
        <div className="text-xs text-[#B8B8B8] mb-1 px-3 py-1 bg-[#151015] rounded-t-lg border border-[#FF5CA8]/15">
          {language}
        </div>
      )}

      {/* Code block */}
      <div className="bg-[#0D0D0D] border border-[#FF5CA8]/20 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-[#151015] border-b border-[#FF5CA8]/15">
          <span className="text-xs text-[#B8B8B8]">Code</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-[#FF5CA8]/15 hover:bg-[#FF87C5]/25 rounded transition-colors duration-200"
            title="Copy code"
          >
            {copied ? (
              <>
                <BiCheck className="w-3 h-3 text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <BiCopy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <pre className="px-4 py-3 overflow-x-auto text-sm text-[#F5F5F5]/90">
          <code className="font-mono">{code}</code>
        </pre>
      </div>
    </div>
  );
};

// Function to parse message and extract code blocks
const parseMessage = (message) => {
  const parts = [];
  const codeBlockRegex = /```(\w+)?\n?([\s\S]*?)```/g;

  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(message)) !== null) {
    // Add text before code block
    if (match.index > lastIndex) {
      const textBefore = message.slice(lastIndex, match.index);
      if (textBefore.trim()) {
        parts.push({ type: 'text', content: textBefore });
      }
    }

    // Add code block
    const language = match[1] || '';
    const code = match[2].trim();
    parts.push({ type: 'code', language, content: code });

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < message.length) {
    const remainingText = message.slice(lastIndex);
    if (remainingText.trim()) {
      parts.push({ type: 'text', content: remainingText });
    }
  }

  return parts.length > 0 ? parts : [{ type: 'text', content: message }];
};

const ChatBubble = ({ message, role }) => {
  const isUser = role === "user";
  const parsedMessage = parseMessage(message);

  return (
    <div
      className={`w-full flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`max-w-[70%] px-4 py-3 rounded-xl text-sm
           ${
             isUser
               ? "bg-[#FF5CA8] text-[#0D0D0D] shadow-[0_0_16px_rgba(200,75,255,0.35)]"
               : "bg-[#151015]/90 text-[#F5F5F5]/90 border border-[#FF5CA8]/15 shadow-[0_0_14px_rgba(200,75,255,0.16)]"
           }
           `}
      >
        {parsedMessage.map((part, index) => {
          if (part.type === 'code') {
            return (
              <CodeBlock
                key={index}
                code={part.content}
                language={part.language}
              />
            );
          } else {
            return (
              <p key={index} className="whitespace-pre-line mb-2 last:mb-0">
                {part.content}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ChatBubble;
