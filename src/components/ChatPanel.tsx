import type { UploadedDocument } from '../types/document';
import { useState } from 'react';
import type { Message } from '../types/message';
import {getAIResponse} from '../services/aiService'

type ChatPanelprops = {
  selectedDocument: UploadedDocument | null;
};

function ChatPanel({ selectedDocument }: ChatPanelprops) {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");
 
  const handleSend = async () => {
    if (!question.trim() || !selectedDocument) return;
    setError("");
    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: question,
    };
    setMessages((previousMessages) => [...previousMessages, userMessage]);
    setQuestion('');
    setLoading(true);
    try{
      
      const response = await getAIResponse(question,selectedDocument);
      const assistantMessage: Message = {
        id:Date.now(),
        role: "assistant",
        content: response,
       };
      setMessages((previousMessages) => [...previousMessages, assistantMessage]);
      
    }catch{
      setError("Something went wrong! Try again");
    }finally{
      setLoading(false);
    }
    

  };
    return (
      <main>
        <h2>Chat</h2>
        <div>
          {selectedDocument ? (
            <p> Chatting with: {selectedDocument.name} </p>
          ) : (
            <p> Select a document and ask questions about it</p>
          )}
        </div>
        <div>
          {messages.map((message) => (
            <div key={message.id}>
              <strong>{message.role}:</strong>
              <span>{message.content}</span>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Please start entering here"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        {loading ?
        <h6>AI is thinking</h6> : ''}
        {error && <h6>{error}</h6>}
        <button
          onClick={handleSend}
          disabled={!question.trim() || selectedDocument == null || loading == true}>
          Send
        </button>
      </main>
    );
  };


export default ChatPanel;
