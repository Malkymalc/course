import React, { Component } from 'react';


class VideoList extends Component{



  render(){
    const videos = this.props.videos.map(video => {
      return <VideoListItem video={video}/>;
    });

    return(
      <div className='video-list'>
        {videos}
      </div>
    );
  }

}

export default VideoList;
