import React, { useState } from 'react';
import './Timestamp.css';

function Timestamp() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [videoInfo, setVideoInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  // YouTube URL validation regex
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})(\S*)?$/;

  const validateYouTubeUrl = (url) => {
    return youtubeRegex.test(url);
  };

  const extractVideoId = (url) => {
    const match = url.match(youtubeRegex);
    return match ? match[4] : null;
  };

  const fetchVideoInfo = async (videoId) => {
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch video information');
    }

    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      const video = data.items[0];
      return {
        id: video.id,
        title: video.snippet.title,
        thumbnail: video.snippet.thumbnails.maxres || video.snippet.thumbnails.high || video.snippet.thumbnails.medium,
        duration: video.contentDetails.duration,
        channelTitle: video.snippet.channelTitle,
        publishedAt: video.snippet.publishedAt
      };
    } else {
      throw new Error('Video not found');
    }
  };

  const formatDuration = (duration) => {
    // Convert ISO 8601 duration to readable format
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (match[1] || '').replace('H', '');
    const minutes = (match[2] || '').replace('M', '');
    const seconds = (match[3] || '').replace('S', '');
    
    let result = '';
    if (hours) result += `${hours}:`;
    if (minutes) result += `${minutes.padStart(2, '0')}:`;
    else result += '00:';
    if (seconds) result += seconds.padStart(2, '0');
    else result += '00';
    
    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setVideoInfo(null);
    
    if (!url.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }

    if (!validateYouTubeUrl(url)) {
      setError('Please enter a valid YouTube URL');
      return;
    }

    setLoading(true);
    
    try {
      const videoId = extractVideoId(url);
      const info = await fetchVideoInfo(videoId);
      setVideoInfo(info);
    } catch (err) {
      setError(err.message || 'Failed to fetch video information');
    } finally {
      setLoading(false);
    }
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setError(''); // Clear error when user starts typing
    setVideoInfo(null); // Clear video info when URL changes
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
          <button 
            type="submit" 
            className={`generate-btn ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Generate'}
          </button>
        </form>

        {videoInfo && (
          <div className="video-info">
            <div className="video-thumbnail">
              <img 
                src={videoInfo.thumbnail.url} 
                alt={videoInfo.title}
                className="thumbnail-image"
              />
              <div className="video-duration">{formatDuration(videoInfo.duration)}</div>
            </div>
            <div className="video-details">
              <h3 className="video-title">{videoInfo.title}</h3>
              <p className="video-channel">{videoInfo.channelTitle}</p>
              <p className="video-resolution">Max Resolution: {videoInfo.thumbnail.width}x{videoInfo.thumbnail.height}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Timestamp;