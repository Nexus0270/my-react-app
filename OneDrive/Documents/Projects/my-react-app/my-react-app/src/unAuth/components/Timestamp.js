import React, { useState } from 'react';
import './Timestamp.css';

function Timestamp() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  // YouTube URL validation regex
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})(\S*)?$/;

  const validateYouTubeUrl = (url) => {
    return youtubeRegex.test(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!url.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }

    if (!validateYouTubeUrl(url)) {
      setError('Please enter a valid YouTube URL');
      return;
    }

    // Handle URL submission here
    console.log('Processing URL:', url);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setError(''); // Clear error when user starts typing
  };

  return (
    <div className="timestamp">
      <div className="timestamp-container">
        <h2 className="timestamp-title">AI YouTube Timestamps</h2>
        <p className="timestamp-description">
          Generates timestamps for a given YouTube video using the bump-1.0 model. 
          This software was built using the AI— watch tutorials how to <strong>here</strong>.
        </p>
        
        <form className="timestamp-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={url}
              onChange={handleUrlChange}
              placeholder="Enter YouTube video URL"
              className={`url-input ${error ? 'error' : ''}`}
            />
            {error && <div className="error-message">{error}</div>}
          </div>
          <button type="submit" className="generate-btn">
            Generate
          </button>
        </form>
      </div>
    </div>
  );
}

export default Timestamp;