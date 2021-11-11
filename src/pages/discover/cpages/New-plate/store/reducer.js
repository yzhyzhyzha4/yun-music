import { Map } from 'immutable'
import { GET_NEWPLATE, GET_TOPPLATE, CHANGE_TOTAL } from './actioncreater'
const defaultstore = Map({
    hotplate: [],
    topplate: [],
    total: 500
})

export default function newplatestore(prestore = defaultstore, action) {
    const { type, data } = action;
    switch (type) {
        case GET_NEWPLATE: return prestore.set("hotplate", data)
        case GET_TOPPLATE: return prestore.set("topplate", data)
        case CHANGE_TOTAL: return prestore.set("total", data)
        default: return prestore
    }
}