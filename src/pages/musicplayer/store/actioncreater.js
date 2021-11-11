import { parseLyric } from '../../../utils/lrc-parse'
import { getcurrentsong, getlyric, getsimisong, getcontainsong } from './onlinerequest'
export const GET_CURRENTSONG = "getcurrentsong"
export const ADD_SONGLIST = "addsonglist"
export const CHANGE_CURRENTINDEX = "changecurrentindex"
export const GET_LYRIC = "getlyric"
export const CHANGE_LYRICINDEX = "changelyricindex"
export const CLEAR_PLAYLIST = "clearplaylist"
export const GET_SIMISONG = "getsimisong"
export const GET_CONTAINSONG = "getcontainsong";
export const DELETE_PLAYLIST = "deleteplaylist"
export const getcurrentsongaction = data => ({
    type: GET_CURRENTSONG,
    data
})
export const addsonglistaction = data => ({
    type: ADD_SONGLIST,
    data
})
export const changecurrentindexaction = data => ({
    type: CHANGE_CURRENTINDEX,
    data
})
export const getlyricaction = data => ({
    type: GET_LYRIC,
    data
})
export const changecurrentlyricindexaction = data => ({
    type: CHANGE_LYRICINDEX,
    data
})
export const clearplaylistaction = (data) => ({
    type: CLEAR_PLAYLIST,
    data
})
export const deleteplaylistaction = data => ({
    type: DELETE_PLAYLIST,
    data
})
export const getsimisongaction = (data) => ({
    type: GET_SIMISONG,
    data
})
export const getcontainsongaction = (data) => ({
    type: GET_CONTAINSONG,
    data
})
export const getcurrentsongactionasync = (ids) => {
    return dispatch => {
        getcurrentsong(ids).then(res => {
            dispatch(getcurrentsongaction(res.songs[0]))
            getlyricactionasync(ids)
        })
    }
}
export const addsonglistactionasync = (ids) => {
    return (dispatch, getstate) => {
        getcurrentsong(ids).then(res => {
            const song = res.songs[0];
            const playlist = getstate().get("playerstore").get("playlist");
            const i = playlist.findIndex(item => item.id === song.id);
            dispatch(getcurrentsongaction(song));
            if (i === -1) {
                const newplaylist = [...playlist, song]
                dispatch(addsonglistaction(newplaylist));
                dispatch(changecurrentindexaction(newplaylist.length - 1))
            } else {
                dispatch(changecurrentindexaction(i))
            }
        })
    }
}

export const getlyricactionasync = (id) => {
    return dispatch => {
        getlyric(id).then(res => {
            if (!res.lrc) return
            dispatch(getlyricaction(parseLyric(res.lrc.lyric)))
        })
    }
}

export const getsimisongactionasync = () => {
    return (dispatch, getstate) => {
        const { id } = getstate().get("playerstore").get("currentsong");
        if (!id) return
        getsimisong(id).then(res => {
            dispatch(getsimisongaction(res.songs));
        })
    }
}
export const getcontainsongactionasync = () => {
    return (dispatch, getstate) => {
        const { id } = getstate().get("playerstore").get("currentsong");
        if (!id) return
        getcontainsong(id).then(res => {
            dispatch(getcontainsongaction(res.playlists));
        })
    }
}