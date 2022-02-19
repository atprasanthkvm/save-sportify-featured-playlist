import axios from 'axios';
import { FETCH_PLAYLISTS, LOAD_SAVE_PLAYLIST, SAVE_PLAYLIST, UPDATE_FEATURED_PLAYLIST } from '../../Constants/Constants';

export const fetchFeaturedPlaylists = () => async (dispatch) => {

    let token = window.localStorage.getItem("token")

    const { data } = await axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    let savedPlaylist = JSON.parse(window.localStorage.getItem("saved_playlist"));
    let featuredPlaylist = data.playlists.items;
    let savedPlaylistIdList = [];
    if(savedPlaylist){

        savedPlaylistIdList = savedPlaylist.map(item => item.id)

        featuredPlaylist = featuredPlaylist.filter( item => savedPlaylistIdList.indexOf(item.id) === -1);

    }


    dispatch({ type: FETCH_PLAYLISTS, payload: featuredPlaylist });
}


export const loadSavedPlaylists = () => async (dispatch) => {
    let savedPlaylist = JSON.parse(window.localStorage.getItem("saved_playlist"));
    if(savedPlaylist){

        dispatch({ type: LOAD_SAVE_PLAYLIST, payload: savedPlaylist });
    }else{
        dispatch({ type: LOAD_SAVE_PLAYLIST, payload: [] });
    }
}


export const savePlaylist = (playlist) => async (dispatch) => {
    window.localStorage.setItem("saved_playlist", JSON.stringify(playlist))

    dispatch({ type: SAVE_PLAYLIST, payload: playlist });
}

export const updateFeaturedPlaylist = (playlist) => async (dispatch) => {

    dispatch({ type: UPDATE_FEATURED_PLAYLIST, payload: playlist });
}