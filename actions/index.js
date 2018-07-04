
/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';
/*Music APP*/

export const fetchAdvert = () =>{
    return {
        type: Types.FETCH_ADVERT,
    }
}

export const fetchPlaylists = () =>{
    
    return {
        type: Types.FETCH_PLAYLISTS,
    }
}

export const fetchTopicGenres = () =>{
    
    return {
        type: Types.FETCH_TOPICGENRES,
    }
}

export const fetchAlbums = () =>{
    
    return {
        type: Types.FETCH_ALBUMS,
    }
}

export const fetchFavouriteSongs = () =>{
    
    return {
        type: Types.FETCH_FAVOURITESONGS,
    }
}


export const fetchAdvertSongs = (id) =>{
    return {
        type: Types.FETCH_ADVERT_SONGS,id,
    }
}