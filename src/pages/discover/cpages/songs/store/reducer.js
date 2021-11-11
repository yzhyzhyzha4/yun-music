import { Map } from 'immutable'
import { GET_CATEGORY, GET_CATEGORYLIST, CHANGE_CATEGORY, CHANGE_CURRENTPAGE } from './actioncreater'
const defaultstore = Map({
    category: [],
    currentcategory: "全部",
    songslist: []
})
export default function songstore(prestore = defaultstore, action) {
    const { data, type } = action;
    switch (type) {
        case GET_CATEGORY: return prestore.set("category", data)
        case GET_CATEGORYLIST: return prestore.set("songslist", data)
        case CHANGE_CATEGORY: return prestore.set("currentcategory", data)
        case CHANGE_CURRENTPAGE: return prestore.set("songslist", data)
        default: return prestore;
    }
}