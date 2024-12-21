import React from "react";

function messageCard({ messages }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="h-40 w-[50rem] border border-black rounded-[10px]">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg._id} className="mb-4 p-2 border-b border-gray-300">
              <p>{msg.message}</p>
            </div>
          ))
        ) : (
          <p>No messages to display</p>
        )}
      </div>
    </div>
  );
}

export default messageCard;
