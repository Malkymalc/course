import { combineReducers } from 'redux';


const songsReducer = () => {

  return [
    {title: 'alan', duration: '4:05'},
    {title: 'bob', duration: '3:05'},
    {title: 'chris', duration: '1:05'},
  ];
}

const selectedSongReducer = (selectedSong = null, action) => {
  return action.type === 'SONG_SELECTED' ?
    action.payload
  : selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
