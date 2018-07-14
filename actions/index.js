
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

export const fetchAllPlaylists = () =>{
    
    return {
        type: Types.FETCH_ALL_PLAYLISTS,
    }
}

export const fetchAllGenres = () =>{
    
    return {
        type: Types.FETCH_ALL_GENRE,
    }
}


export const fetchAllAlbums= () =>{
    
    return {
        type: Types.FETCH_ALL_ALBUMS,
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

export const fetchPlayListSongs = (id) =>{
    return {
        type: Types.FETCH_PLAYLIST_SONGS,id,
    }
}

export const resetSongList = () =>{
    return {
        type: Types.RESET_SONG_LIST,
    }
}

export const resetGroup = () =>{
    return {
        type: Types.RESET_GROUP,
    }
}



export const fetchGenreSongs = (id) =>{
    return {
        type: Types.FETCH_GENRE_SONGS,id,
    }
}

export const fetchAlbumSongs = (id) =>{
    return {
        type: Types.FETCH_ALBUM_SONGS,id,
    }
}


export const searchSongs = (name) =>{
    return {
        type: Types.SEARCH_SONGS,name,
    }
}