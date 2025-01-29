import React, { useState } from 'react';
import './UploadNotes.css';

const UploadNotes = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!title || !content || !file) {
      setMessage('Please fill in all fields and upload a file.');
      return;
    }

    // Simulate the file upload by storing it in localStorage (for demonstration)
    const notesData = {
      title,
      content,
      fileName: file.name,
    };

    // Save in localStorage (can be used for later retrieval)
    localStorage.setItem('uploadedNotes', JSON.stringify(notesData));

    setMessage('Notes uploaded successfully!');
    setTitle('');
    setContent('');
    setFile(null);
  };

  return (
    <div className="upload-notes-container">
      <h2>Upload Notes</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter the note title"
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            placeholder="Enter the note content"
          />
        </div>
        <div>
          <label htmlFor="file">Upload File:</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadNotes;
