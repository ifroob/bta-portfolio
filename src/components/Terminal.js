import React, { useState } from 'react';
import './Terminal.css';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    'Welcome to Brian Ta\'s interactive terminal!',
    'Type "help" for a list of commands.'
  ]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand(input);
      setInput('');
    }
  };

  const processCommand = (cmd) => {
    const newHistory = [...history];
    switch (cmd.trim().toLowerCase()) {
      case 'help':
        newHistory.push('Available commands: help, about, clear');
        break;
      case 'about':
        newHistory.push('I am Brian Ta, a DevOps Engineer.');
        break;
      case 'clear':
        setHistory([]);
        break;
      default:
        newHistory.push(`Command not found: ${cmd}`);
    }
    setHistory(newHistory);
  };

  return (
    <div className="terminal">
      <div className="terminal-output">
        {history.map((line, index) => (
          <div key={index} className="terminal-line">
            {line}
          </div>
        ))}
      </div>
      <textarea
        className="terminal-input"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </div>
  );
};

export default Terminal;
