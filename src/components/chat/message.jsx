import React from 'react';

export const Message = ({ text, handleDeleteClick }) => {
  const handleCLick = () => {
    handleDeleteClick(text);
  };

  return (
    <div onClick={handleCLick} className="message-box">
      <span>{text}</span>
    </div>
  );
};
