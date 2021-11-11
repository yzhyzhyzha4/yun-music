import { gettopbanner, gethotsongs, getnewablum, getranking, getsettledsinger } from './onlinedata'
export const TOP_BANNER = 'topbanner'
export const HOT_RECOMMEND = 'hotcommend'
export const NEW_ALBUM = "newalbum"
export const TOP_RANKING = 'topranking'
export const NEW_RANKING = 'newranking'
export const ORGIN_RANKING = "orginranking"
export const SETTLED_SINGER = "settledsinger"
// 轮播图
export const gettopbanneraction = (data) => ({
    type: TOP_BANNER,
    data
})
//入门推荐
export const gethotrecommendaction = (data) => ({
    type: HOT_RECOMMEND,
    data
})
//新碟上架
export const getnewablumaction = (data) => ({
    type: NEW_ALBUM,
    data
})
//飙升榜
export const gettoprankingaction = (data) => ({
    type: TOP_RANKING,
    data
})
//新歌榜
export const getnewrankingaction = (data) => ({
    type: NEW_RANKING,
    data
})
//原创榜
export const getorginrankingaction = (data) => ({
    type: ORGIN_RANKING,
    data
})
//入驻歌手
export const getsettledsingeraction = (data) => ({
    type: SETTLED_SINGER,
    data
})

export const gettopbanneractionasync = () => {
    return dispatch => {
        gettopbanner().then(res => {
            dispatch(gettopbanneraction(res.banners))
        })
    }
}
export const gethotrecommendactionasync = (limit = 10) => {
    return dispatch => {
        gethotsongs(limit).then(res => {
            dispatch(gethotrecommendaction(res.result))
        })
    }
}
export const getnewablumactionasync = (limit = 10) => {
    return dispatch => {
        getnewablum(limit).then(res => {
            dispatch(getnewablumaction(res.albums))
        })
    }
}
export const getrankingactionasync = (idx = 0) => {
    return dispatch => {
        switch (idx) {
            case 0: return getranking(0).then(res => {
                dispatch(gettoprankingaction(res.playlist))
            })
            case 1: return getranking(1).then(res => {
                dispatch(getnewrankingaction(res.playlist))
            })
            case 2: return getranking(2).then(res => {
                dispatch(getorginrankingaction(res.playlist))
            })
            default: return getranking(0).then(res => {
                dispatch(gettoprankingaction(res.playlist))
            })
        }
    }
}
export const getsettledsingeractionasync = () => {
    return dispatch => {
        getsettledsinger().then(res => dispatch(getsettledsingeraction(res.artists)))
    }
}