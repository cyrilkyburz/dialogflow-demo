import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function ChatInput({ submit }: { submit: (text: string) => Promise<boolean> }) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setText('');
    ref.current!.focus();

    const result = await submit(text);
    if (!result) {
      setError('Failed');
    }
  };

  return (
    <div className="input">
      <textarea ref={ref} value={text} onChange={({ target }) => setText(target.value)} placeholder="Type a message" />
      <button onClick={handleSubmit} disabled={text.length < 1}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
      {error.length > 0 && (
        <div className="error" onClick={() => setError('')}>
          {error}
          <FontAwesomeIcon icon={faTimes} />
        </div>
      )}
    </div>
  );
}
