import request from '@/service/request';

export const gettopbanner = () => {
    return request({ url: '/banner' })
}

export const gethotsongs = (limit) => {
    return request({
        url: `/personalized?limit=${limit}`,
    })
}
export const getnewablum = (limit) => {
    return request({
        url: '/top/album',
        params: { limit }
    })
}
export const getranking = (idx) => {
    return request({
        url: '/top/list',
        params: { idx }
    })
}

export const getsettledsinger = () => {
    return request({ url: '/artist/list' })
}