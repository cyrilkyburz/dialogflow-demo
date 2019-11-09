import React, { useState } from 'react';
import { Messages } from './interfaces';
import MessagesView from './components/MessagesView';
import ChatInput from './components/ChatInput';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Messages>([
    { text: 'Hi', sent: true },
    { text: 'Hi, I am Dialga. How can i help?', sent: false },
    { text: 'Are you real?', sent: true },
    { text: 'Or Chatbot?', sent: true },
    { text: 'I am fake.', sent: false }
  ]);

  return (
    <div className="Chat">
      <header>
        <h1>Dialogflow Demo</h1>
      </header>
      <MessagesView messages={messages} />
      <ChatInput
        submit={text => {
          console.log(text);
          return Promise.resolve(true);
        }}
      />
    </div>
  );
};

export default App;
