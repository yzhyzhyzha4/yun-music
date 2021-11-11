import { getHotAlbums, getTopAlbums } from './onlinedata'

export const GET_NEWPLATE = "getnewplate";
export const GET_TOPPLATE = "gettopplate";
export const CHANGE_TOTAL = "changetotal"

export const getnewplateaction = (data) => ({
    type: GET_NEWPLATE,
    data
})
export const gettopplateaction = (data) => ({
    type: GET_TOPPLATE,
    data
})
export const changetotalaction = (data) => ({
    type: CHANGE_TOTAL,
    data
})
export const getnewplateactionasync = () => {
    return dispatch => {
        getHotAlbums().then(res => {
            dispatch(getnewplateaction(res.albums))
        })
    }
}

export const gettopplateactionasync = (page) => {
    return dispatch => {
        getTopAlbums(30, (page - 1) * 30).then(res => {
            console.log(res);
            dispatch(gettopplateaction(res.albums));
            dispatch(changetotalaction(res.total));
        })
    }
}