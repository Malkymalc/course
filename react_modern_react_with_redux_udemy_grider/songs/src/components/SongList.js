import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends Component {

  getSongItems = () => this.props.songs.map(song => {

    const onClick = () => selectSong({song: song.title})
    return(
      <div className='item' key={song.title}>
        <div className='right floated content'>
          <button
            className='ui button primary'
            onClick={() => selectSong({})}
          >Select</button>
        </div>
        <div className='content'>{song.title}</div>
      </div>
    );
  });

  render(){
    return(
      <div className='ui divided list'>{this.getSongItems()}</div>
    );
  }

}

const mapStateToProps = (state) => {
  return {songs: state.songs};
};

export default connect(mapStateToProps, { selectSong })(SongList);
