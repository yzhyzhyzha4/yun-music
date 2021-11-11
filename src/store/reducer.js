import { combineReducers } from 'redux-immutable'
import recommendstore from '../pages/discover/cpages/recommend/store'
import playerstore from '../pages/musicplayer/store/reducer'
import rankingstore from '../pages/discover/cpages/ranking/store/reducer'
import songstore from '../pages/discover/cpages/songs/store/reducer'
import anchorstore from '../pages/discover/cpages/Anchor-station/store/reducer'
import songerstore from '../pages/discover/cpages/songer/store/reducer'
import newplatestore from '../pages/discover/cpages/New-plate/store/reducer'
export default combineReducers({ recommendstore, playerstore, rankingstore, songstore, anchorstore, songerstore, newplatestore })