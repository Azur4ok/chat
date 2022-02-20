import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Message } from './message';
import deleteMessage from '../../redux/actions/deleteMessage';

export const Chat = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector(({ operationWithMessages }) => operationWithMessages);

  const handleDeleteClick = (messageText) => {
    dispatch(deleteMessage(messageText));
  };

  const chatMessages =
    messages &&
    messages.map((message, index) => (
      <Message handleDeleteClick={handleDeleteClick} text={message} key={`${message}_${index}`} />
    ));

  return <div className="chat" >
    {chatMessages}
    </div>;
};
