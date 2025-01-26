import React from "react";

const AutoPlayVideo = () => {
  return (
    <div>
      <video
        src="../assets/video/video1.mp4"
        autoPlay
        loop
        muted // Optional: To mute the video (since auto-play often requires muted)
        width="100%"
        height="320px"
        
      >
        Your browser does not support the video tag.
      </video>
      <div className="glightbox pulsating-play-btn"></div>
    </div>
  );
};

export default AutoPlayVideo;
