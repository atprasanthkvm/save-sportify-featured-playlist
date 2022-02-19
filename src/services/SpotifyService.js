import { axiosAPI } from './apiConfig'

class SpotifyService {

getFeaturedPlaylists(){
    return axiosAPI.get('/v1/browse/featured-playlists');
}



}

export default new SpotifyService();