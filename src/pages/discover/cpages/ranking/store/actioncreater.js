import { getLeftlist, getRankingList } from './onlinedata'

export const GET_LEFTLIST = "getleftlist";
export const CHANGE_CURRENTINDEX = "changecurrentindex"
export const GET_RANKINGLIST = "getrankinglist"
export const getleftlistaction = (data) => ({
    type: GET_LEFTLIST,
    data
})
export const changecurrentindexaction = (data) => ({
    type: CHANGE_CURRENTINDEX,
    data
})
export const getrankinglistaction = (data) => ({
    type: GET_RANKINGLIST,
    data
})
export const getleftlistactionasync = () => {
    return dispatch => {
        getLeftlist().then(res => {
            dispatch(getleftlistaction(res.list))
        })
    }
}
export const getrankinglistactionasync = (id) => {
    return dispatch => {
        getRankingList(id).then(res => {
            dispatch(getrankinglistaction(res.playlist))
        })
    }
}