import { Map } from 'immutable'
import { GET_LEFTLIST, CHANGE_CURRENTINDEX, GET_RANKINGLIST } from './actioncreater'

const defaultstate = Map({
    leftlist: [],
    songlist: [],
    currentindex: 0
})
export default function rankingreducer(prestate = defaultstate, action) {
    const { type, data } = action;
    switch (type) {
        case GET_LEFTLIST: return prestate.set("leftlist", data)
        case CHANGE_CURRENTINDEX: return prestate.set("currentindex", data)
        case GET_RANKINGLIST: return prestate.set("songlist", data)
        default: return prestate;
    }
}