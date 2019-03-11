import React from 'react';
import './VideoItem.css';

const VideoListItem = ({video, onVideoSelect}) => {

const { channelTitle, description, thumbnails, title } = video.snippet;


  return(
    <div className='video-item ui item'
      onClick={() => onVideoSelect(video)}
    >

      <img className='ui image' src={thumbnails.default.url} alt={title}/>

      <div className='content'>
        <h1 className='header'>{title}</h1>
        <div className='description'>
          <h2>By: {channelTitle}</h2>
          <p>About: {description}</p>
        </div>
      </div>

    </div>
  );
}

export default VideoListItem;
