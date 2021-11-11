import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';


import HYThemeHeaderNormal from '@/componments/theme-header-normal';
import HYAlphaList from './c-cpns/alpha-list';
import HYArtistItem from './c-cpns/artist-item';
import {
  ArtistListWrapper
} from './style';

export default memo(function HYArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["songerstore", "currentType"]),
    artistList: state.getIn(["songerstore", "artistList"])
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <HYThemeHeaderNormal title={currentType.name} />
      <HYAlphaList />
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <HYArtistItem key={item.id} index={index} info={item} />
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
