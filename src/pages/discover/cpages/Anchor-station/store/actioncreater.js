import { getDjRadioCatelist, getDjRadioRecommend, getDjRadios } from './onlinedata'
export const GET_CATEGORYLIST = "getcategorylist1"
export const CHANGE_CURRENTID = "changecurrentid"
export const GET_NEWRADIO = "getnewradio"
export const GET_RADIORANKING = "getradioranking"

export const getcategorylistaction = (data) => ({
    type: GET_CATEGORYLIST,
    data
})
export const getnewradioaction = (data) => ({
    type: GET_NEWRADIO,
    data
})
export const getradiorankingaction = (data) => ({
    type: GET_RADIORANKING,
    data
})
export const changecurrentidaction = (data) => ({
    type: CHANGE_CURRENTID,
    data
})
export const getcategorylistactionasync = () => {
    return dispatch => {
        getDjRadioCatelist().then(res => {
            dispatch(getcategorylistaction(res.categories))
        })
    }
}

export const getnewradioactionasync = (type) => {
    return dispatch => {
        getDjRadioRecommend(type).then(res => {
            dispatch(getnewradioaction(res.djRadios))
        })
    }
}

export const getradiorankingactionasync = (currentid, offset) => {
    return dispatch => {
        getDjRadios(currentid, 30, offset).then(res => {
            dispatch(getradiorankingaction(res.djRadios))
        })
    }
}


