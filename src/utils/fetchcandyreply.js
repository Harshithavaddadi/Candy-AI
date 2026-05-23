export const fetchCandyReply = async (messages) => {
  const res = await fetch("/api/candy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  const contentType = res.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await res.json()
    : { reply: await res.text() };

  if (!res.ok) {
    throw new Error(data.reply || "Failed to get response from AI.");
  }

  return data.reply;
};
