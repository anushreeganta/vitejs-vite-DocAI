import { useState } from 'react';
import type { UploadedDocument } from '../types/document';

type SidebarProps = {
  selectedDocument: UploadedDocument | null;
  setSelectedDocument: React.Dispatch<
    React.SetStateAction<UploadedDocument | null>
  >;
};

function Sidebar({ selectedDocument, setSelectedDocument }: SidebarProps) {
  const documents: UploadedDocument[] = [
    {
      id: 1,
      name: 'React Interview Guide.pdf',
    },
    {
      id: 2,
      name: 'JavaScript Notes.pdf',
    },
    {
      id: 3,
      name: 'System Design.pdf',
    },
  ];
  return (
    <aside>
      <h2>Documents</h2>
      <button> + Upload Document</button>
      <div>
        {documents.map((document) => (
          <button
            key={document.id}
            onClick={() => {
              console.log('Selected document:', document);
              setSelectedDocument(document);
            }}
          >
            {document.name}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
