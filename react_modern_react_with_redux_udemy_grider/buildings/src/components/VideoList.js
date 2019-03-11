import React from 'react';
import VideoListItem from './VideoListItem.js';



const VideoList = ({videos, onVideoSelect}) => {

  const videosList = videos.map(video => {
    return (
      <VideoListItem
        video={video}
        key={video.etag}
        onVideoSelect={onVideoSelect}
      />
    );
  });


  return(
    <div className='video-list ui relaxed divided selection list'>
      {videosList}
    </div>
  );

}

export default VideoList;
