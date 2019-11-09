import React from 'react';
import { Messages } from '../interfaces';

export default function MessagesView({ messages }: { messages: Messages }) {
  return (
    <div className="messages">
      {messages.map(message => (
        <div className={`${message.sent ? 'sent' : 'received'} message`}>{message.text}</div>
      ))}
    </div>
  );
}
