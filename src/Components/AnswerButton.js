import React from 'react';

const AnswerButton = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default AnswerButton;