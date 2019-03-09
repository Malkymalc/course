import React, { Component } from 'react';
import youtube from './api/youtube.js';

import Search from './components/Search.js';
import VideoView from './components/VideoView.js';
import VideoList from './components/VideoList.js';


class App extends Component {

  state = {
    videos: [],
    video: {}
  }

  onSearchSubmit = async (e) => {
    const term = e.target.value;
    const videos = await youtube.get('/videos/search', {
      query: term,
    })
    this.setState({videos});
  }

  render(){
    return(
      <div className="app">
        <Search onSubmit={this.onSearchSubmit}/>
        <VideoView video={video}/>
        <VideoList videos={videos}/>
      </div>
    );
  }

}
export default App;
