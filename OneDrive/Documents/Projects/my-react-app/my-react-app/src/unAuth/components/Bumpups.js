import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import './Bumpups.css';

function Bumpups() {
  const handleCardClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bumpups">
      <div className="bumpups-header">
        <h2>Do more with bump<span className="purple-text">ups</span>.com</h2>
        <p>Really just testing things right now tbh</p>
      </div>
      <div className="bumpups-container">
        <div className="bumpup-card" onClick={() => handleCardClick('#')}>
          <div className="bumpup-icon">
            <img src="https://img.icons8.com/fluency/96/000000/video.png" alt="Local Videos" />
          </div>
          <h3>Local Videos</h3>
          <p>Learn More</p>
          <div className="arrow-icon">
            <FontAwesomeIcon icon={faCircleRight} />
          </div>
        </div>

        <div className="bumpup-card" onClick={() => handleCardClick('https://docs.bumpups.com/docs/getting-started')}>
          <div className="bumpup-icon">
            <img src="https://img.icons8.com/fluency/96/000000/video-call.png" alt="Video Chat" />
          </div>
          <h3>Video Chat</h3>
          <p>Learn More</p>
          <div className="arrow-icon">
            <FontAwesomeIcon icon={faCircleRight} />
          </div>
        </div>

        <div className="bumpup-card" onClick={() => handleCardClick('https://www.youtube.com/watch?v=9js9TtWxRlo&list=PLJrzt4ameiaMxmOwTlxOy3eW37oZgAMIw&index=5')}>
          <div className="bumpup-icon">
            <img src="https://img.icons8.com/fluency/96/000000/youtube.png" alt="AI Youtube" />
          </div>
          <h3>AI Youtube</h3>
          <p>Learn More</p>
          <div className="arrow-icon">
            <FontAwesomeIcon icon={faCircleRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bumpups;