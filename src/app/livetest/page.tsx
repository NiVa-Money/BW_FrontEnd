"use client"
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface Message {
  role: string;
  content: string;
}

const AdminChat: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const socketConnection: Socket = io('http://localhost:3000', {
      query: { role: 'admin' },
    });
    setSocket(socketConnection);

    // Handle connection alert
    socketConnection.on('connected', (msg: string) => {
      alert(msg);
    });

    // Listen for broadcast messages
    socketConnection.on('broadcast', (msg: Message) => {
      setMessages((prevMessages) => [...prevMessages, `${msg.role}: ${msg.content}`]);
    });

    // Listen for broadcast messages from bot
    socketConnection.on('broadcastFromBot', (msg: Message) => {
      setMessages((prevMessages) => [...prevMessages, `${msg.role}: ${msg.content}`]);
    });

    // Cleanup socket connection on unmount
    return () => {
      socketConnection.disconnect();
    };
  }, []);

  // Function to handle message send
  const sendMessage = () => {
    if (message && socket) {
      socket.emit('message', { role: 'admin', content: message });
      setMessage(''); // Clear the input field after sending the message
    }
  };

  return (
    <div>
      <h1>Chat as Admin</h1>
      <ul id="messages">
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <input
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ color: 'black' }} 
        autoComplete="off"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default AdminChat;
