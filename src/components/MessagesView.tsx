import React, { useEffect, useRef } from 'react';
import { Messages } from '../interfaces';

export default function MessagesView({ messages }: { messages: Messages }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={ref} className="messages">
      {messages.map((message, key) => (
        <div key={key} className={`${message.sent ? 'sent' : 'received'} message`}>
          {message.text}
        </div>
      ))}
    </div>
  );
}
