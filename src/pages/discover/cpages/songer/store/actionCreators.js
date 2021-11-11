import { getArtistList } from './onlinedata';
export const CHANGE_CURRENT_AREA = "artist/CHANGE_CURRENT_AREA";
export const CHANGE_CURRENT_TYPE = "artist/CHANGE_CURRENT_TYPE";

export const CHANGE_ARTIST_LIST = "artist/CHANGE_ARTIST_LIST";


const changeArtistListAction = (artistList) => ({
  type: CHANGE_ARTIST_LIST,
  artistList
})

export const changeCurrentAreaAction = (area) => ({
  type: CHANGE_CURRENT_AREA,
  currentArea: area
});

export const changeCurrentTypeAction = (type) => ({
  type: CHANGE_CURRENT_TYPE,
  currentType: type
});

export const getArtistListAction = (area, type, alpha) => {
  return dispatch => {
    getArtistList(area, type, alpha).then(res => {
      console.log(res);
      dispatch(changeArtistListAction(res.artists))
    })
  }
}