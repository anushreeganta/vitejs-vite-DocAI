import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ChatPanel from './components/ChatPanel';
import Header from './components/Header';
import type { UploadedDocument } from './types/document';

function App() {
  const [selectedDocument, setSelectedDocument] =
    useState<UploadedDocument | null>(null);

  return (
    <>
      <Header />
      <div className="app-layout">
        <Sidebar
          selectedDocument={selectedDocument}
          setSelectedDocument={setSelectedDocument}
        />
        <ChatPanel selectedDocument={selectedDocument} />
      </div>
    </>
  );
}

export default App;
