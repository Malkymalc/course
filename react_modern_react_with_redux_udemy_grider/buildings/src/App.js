import React, { Component } from 'react';
import youtube from './api/youtube.js';

import Search from './components/Search.js';
import VideoDetail from './components/VideoDetail.js';
import VideoList from './components/VideoList.js';


class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  onSearchSubmit = async (term) => {
    const result = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: result.data.items,
      selectedVideo: result.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  componentDidMount(){
    this.onSearchSubmit('happy');
  }

  render(){
    return(
      <div className="app ui container">
        <Search onSubmit={this.onSearchSubmit}/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className='five wide column'>
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default App;
