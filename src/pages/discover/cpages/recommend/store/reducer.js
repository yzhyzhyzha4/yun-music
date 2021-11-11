import { Map } from 'immutable'
import { TOP_BANNER, HOT_RECOMMEND, NEW_ALBUM, TOP_RANKING, NEW_RANKING, ORGIN_RANKING, SETTLED_SINGER } from './actioncreater';

const defaultstore = Map({
    topbanner: [],
    hotcommend: [],
    newalbum: [],
    topranking: [],
    newranking: [],
    orginranking: [],
    settledsinger: [],
})

const reducer = (prestore = defaultstore, action) => {
    const { type, data } = action;
    switch (type) {
        case TOP_BANNER: return prestore.set("topbanner", data)
        case HOT_RECOMMEND: return prestore.set("hotcommend", data)
        case NEW_ALBUM: return prestore.set("newalbum", data)
        case TOP_RANKING: return prestore.set("topranking", data)
        case NEW_RANKING: return prestore.set("newranking", data)
        case ORGIN_RANKING: return prestore.set("orginranking", data)
        case SETTLED_SINGER: return prestore.set("settledsinger", data)
        default: return prestore;
    }
}
export default reducer;