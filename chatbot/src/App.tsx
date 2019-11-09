import React, { useEffect, useState } from 'react';
import { Message, Messages } from './interfaces';
import MessagesView from './components/MessagesView';
import ChatInput from './components/ChatInput';
import DialogflowService from './services/dialogflow-service';

const App: React.FC = () => {
  const [dialogflow] = useState(new DialogflowService());
  const [messages, setMessages] = useState<Messages>([{ text: 'Hi, I am Dialga. How can i help?', sent: false }]);
  const [response, setResponse] = useState('');

  const addMessage = (message: Message) => {
    setMessages([...messages, message]);
  };

  useEffect(() => {
    if (response.length) {
      addMessage({ text: response, sent: false });
      setResponse('');
    }
  }, [response]);

  const handleSubmit = async (text: string) => {
    addMessage({ text, sent: true });
    const response = await dialogflow.submit(text);

    if (response) {
      setResponse(response);
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="Chat">
      <header>
        <h1>Dialogflow Demo</h1>
      </header>
      <MessagesView messages={messages} />
      <ChatInput submit={handleSubmit} />
    </div>
  );
};

export default App;
