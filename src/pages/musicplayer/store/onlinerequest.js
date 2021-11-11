import request from '@/service/request';
export const getcurrentsong = (ids = 167876) => {
    return request({
        url: '/song/detail',
        params: {
            ids
        }
    })
}
export const getlyric = (id) => {
    return request({
        url: '/lyric',
        params: {
            id
        }
    })
}

export const getcontainsong = (id) => {
    return request({
        url: "/simi/playlist",
        params: {
            id
        }
    })
}

export const getsimisong = (id) => {
    return request({
        url: '/simi/song',
        params: {
            id
        }
    })
}
