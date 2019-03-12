// ACTIONS

export const selectSong = (options) => {
  return {
    type: 'SONG_SELECTED',
    payload: options.song
  };
}
