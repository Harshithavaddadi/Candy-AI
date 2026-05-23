import { useState } from "react";
import { fetchCandyReply } from "./fetchcandyreply";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

const useCandyChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (userInput: string) => {
    if (!userInput.trim()) return;

    // Clear any previous errors
    setError(null);

    const userMsg: ChatMessage = { role: "user", content: userInput };
    const newMessages = [...messages, userMsg];

    // Add user message to UI immediately
    setMessages(newMessages);
    setIsTyping(true);

    try {
      // Convert messages to the format expected by the API
      const conversationHistory = newMessages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const candyReply = await fetchCandyReply(conversationHistory);
      const aiMsg: ChatMessage = { role: "assistant", content: candyReply };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err: unknown) {
      console.error("Error in sendMessage:", err);
      const message = err instanceof Error ? err.message : String(err);
      setError(message || "Failed to get response from AI. Please try again.");

      // Add error message to chat
      const errorMsg: ChatMessage = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again."
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearError = () => setError(null);

  return { messages, isTyping, sendMessage, error, clearError };
};

export default useCandyChat;