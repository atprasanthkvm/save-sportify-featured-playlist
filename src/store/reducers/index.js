import { combineReducers } from 'redux';
import featuredPlaylistsReducer from './featuredPlaylistsReducer';
import savedPlaylistsReducer from './savedPlaylistsReducer';

export default combineReducers({
    featuredPlaylists: featuredPlaylistsReducer,
    savedPlaylists: savedPlaylistsReducer,
});
  