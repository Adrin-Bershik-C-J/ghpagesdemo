import React, { useEffect, useState } from "react";
import MessageCard from "../components/messageCard";

function homePage() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/showMessage", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await response.json();
        setMessages(data.message);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <MessageCard messages={messages} />
      )}
    </div>
  );
}

export default homePage;
