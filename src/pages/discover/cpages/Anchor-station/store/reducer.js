import { Map } from 'immutable';
import { GET_CATEGORYLIST, CHANGE_CURRENTID, GET_NEWRADIO, GET_RADIORANKING } from './actioncreater'
const defaultstore = Map({
    categories: [],
    recommends: [],
    radios: [],
    currentid: 3,
})
export default function anchorstore(prestore = defaultstore, action) {
    const { data, type } = action;
    switch (type) {
        case GET_CATEGORYLIST: return prestore.set("categories", data);
        case CHANGE_CURRENTID: return prestore.set("currentid", data)
        case GET_NEWRADIO: return prestore.set("radios", data)
        case GET_RADIORANKING: return prestore.set("recommends", data)
        default: return prestore
    }
}