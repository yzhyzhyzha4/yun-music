import { getSongCategory, getSongCategoryList } from './onlinedata'
import {
    handleSongsCategory
} from "@/utils/handle-data";
export const GET_CATEGORY = "getcategory";
export const GET_CATEGORYLIST = "getcategorylist";
export const CHANGE_CATEGORY = "changecurrentcategory"
export const CHANGE_CURRENTPAGE = "changercurrentpage"
export const getcategoryaction = (data) => ({
    type: GET_CATEGORY,
    data
})
export const getcategorylistaction = (data) => ({
    type: GET_CATEGORYLIST,
    data
})
export const changecurrentcategoryaction = (data) => ({
    type: CHANGE_CATEGORY,
    data
})
export const changecurrentpageaction = (data) => ({
    type: CHANGE_CURRENTPAGE,
    data
})
export const getcategoryactionasync = () => {
    return dispatch => {
        getSongCategory().then(res => {
            dispatch(getcategoryaction((handleSongsCategory(res))))
        })
    }
}

export const getcategorylistactionasync = (cat) => {
    return dispatch => {
        getSongCategoryList(cat).then(res => {
            dispatch(getcategorylistaction(res))
        })
    }
}
export const changecurrentpageactionasync = (offset) => {
    return (dispatch, prestore) => {
        const cat = prestore().get("songstore").get("currentcategory")
        getSongCategoryList(cat, offset * 35).then(res => {
            dispatch(getcategorylistaction(res))
        })
    }
}