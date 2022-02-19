import {  LOAD_SAVE_PLAYLIST, SAVE_PLAYLIST } from '../../Constants/Constants';

export default (state = [], action) => {
    switch (action.type) {
      case SAVE_PLAYLIST:
        return action.payload;
        case LOAD_SAVE_PLAYLIST:
          return action.payload;

      default:
        return state;
    }
  };
  