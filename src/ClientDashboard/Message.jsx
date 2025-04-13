// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Mic, Video, Send } from 'lucide-react';
export default function Message() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, sender: 'You' }]);
            setNewMessage('');
        }
    };
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Chat & Collaboration</h2>
            <div className="space-y-2 max-h-60 overflow-y-auto bg-white p-3 rounded shadow">
                {messages.map((msg, index) => (
                    <div key={index} className="p-2 bg-blue-100 rounded">
                        <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <div className="flex items-center space-x-2">
                <input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded"
                />
                <button className="p-2" onClick={handleSendMessage}><Mic /></button>
                <button className="p-2"><Video /></button>
                <button className="p-2" onClick={handleSendMessage}><Send /></button>
            </div>
        </div>
    );
}

