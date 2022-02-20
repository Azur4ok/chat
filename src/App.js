import React from 'react';
import { Chat } from './components/chat/chat';
import { Form } from './components/form';

export const App = () => {
  return (
    <div className="wrapper">
      <header className='header'><h1>Chat</h1></header>
      <Chat />
      <Form />
    </div>
  );
};
