import { FETCH_PLAYLISTS, UPDATE_FEATURED_PLAYLIST } from '../../Constants/Constants';

export default (state = [], action) => {
    switch (action.type) {
      case FETCH_PLAYLISTS:
        return action.payload;
          case UPDATE_FEATURED_PLAYLIST:
          return action.payload;
      default:
        return state;
    }
  };
  