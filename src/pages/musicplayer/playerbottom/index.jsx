import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Slider, Button, Tooltip, message } from "antd";
import { useHistory } from "react-router-dom";

import {
  getcurrentsongactionasync,
  getcurrentsongaction,
  changecurrentindexaction,
  addsonglistactionasync,
  getlyricactionasync,
  changecurrentlyricindexaction,
} from "../store/actioncreater";
import { formatMinuteSecond, getPlayUrl } from "../../../utils/format-utils";
import Playlist from "./c-com/playlist";
import Lyriclist from "./c-com/lyriclist";
import "./style.css";

export default memo(function Music() {
  //state和props
  const [currenttime, setCurrentTime] = useState(0);
  const [slidervalue, setSlidervalue] = useState(0);
  const [ischange, setIsChange] = useState(false);
  const [musicisplay, setMusicIsPlay] = useState(false);
  const [playorder, setPlayorder] = useState(0);
  const [playordericon, setPlayordericon] = useState(
    "iconfont icon-xunhuanbofang"
  );
  const [playordertooltip, setPlayordertooltip] = useState("循环播放");
  const [playlistcomisappera, setPlaylistcomisappera] = useState(false);
  const audioref = useRef();
  // console.log(audioref.current.scrollTop);
  const dispatch = useDispatch();
  //react-hooks
  const { currentsong, playlist, currentindex, lyric, currentlyricindex } =
    useSelector(
      (state) => ({
        currentsong: state.get("playerstore").get("currentsong"),
        playlist: state.get("playerstore").get("playlist"),
        currentindex: state.get("playerstore").get("currentindex"),
        lyric: state.get("playerstore").get("lyric"),
        currentlyricindex: state.get("playerstore").get("currentlyricindex"),
      }),
      shallowEqual
    );
  useEffect(() => {
    audioref.current.src = getPlayUrl(currentsong.id);
    audioref.current.play().then(
      (res) => {
        setMusicIsPlay(true);
      },
      (err) => {
        setMusicIsPlay(false);
      }
    );
  }, [currentsong]);

  //react-redux-hooks
  useEffect(() => {
    dispatch(getcurrentsongactionasync(167876));
    dispatch(addsonglistactionasync(167876));
  }, [dispatch]);
  useEffect(() => {
    switch (playorder) {
      case 0:
        setPlayordericon("iconfont icon-xunhuanbofang");
        setPlayordertooltip("循环播放");
        break;
      case 1:
        setPlayordericon("iconfont icon-23_shunxubofang");
        setPlayordertooltip("顺序播放");
        break;
      case 2:
        setPlayordericon("iconfont icon-suijibofang");
        setPlayordertooltip("随机播放");
        break;
      default:
        setPlayordericon("iconfont icon-xunhuanbofang");
    }
  }, [playorder]);
  useEffect(() => {
    dispatch(getlyricactionasync(currentsong.id));
  }, [dispatch, currentsong]);

  //other
  const playmusic = () => {
    musicisplay ? audioref.current.pause() : audioref.current.play();
    setMusicIsPlay(!musicisplay);
  };
  const timeupdate = (e) => {
    setCurrentTime(e.target.currentTime * 1000);
    if (!ischange) {
      setSlidervalue(((e.target.currentTime * 1000) / alltime) * 100);
    }
    let i = 0;
    for (; i < lyric.length - 1; i++) {
      if (e.target.currentTime * 1000 < lyric[i + 1].time) {
        break;
      }
    }
    if (i !== currentlyricindex) {
      dispatch(changecurrentlyricindexaction(i));
      message.open({
        content: lyric[i].content,
        key: "1",
        duration: 0,
        className: "lgric",
      });
    }
  };
  const changeslider = useCallback((value) => {
    setIsChange(true);
    setSlidervalue(value);
  }, []);
  const alltime = currentsong && currentsong.dt;
  const afterchangeslider = useCallback(
    (value) => {
      setCurrentTime((value / 100) * alltime);
      audioref.current.currentTime = ((value / 100) * alltime) / 1000;
      setIsChange(false);
    },
    [alltime]
  );
  const changeplayorder = () => {
    setPlayorder((prestate) => (prestate + 1) % 3);
  };
  const changeplaymusic = (tag) => {
    let changedindex = currentindex + tag;
    if (changedindex < 0) changedindex = playlist.length - 1;
    if (changedindex >= playlist.length) changedindex = 0;
    dispatch(getcurrentsongaction(playlist[changedindex]));
    dispatch(changecurrentindexaction(changedindex));
  };
  const musicend = () => {
    const randomindex = Math.floor(Math.random() * playlist.length);
    switch (playorder) {
      case 0:
        dispatch(getcurrentsongaction(playlist[currentindex]));
        break;
      case 1:
        dispatch(getcurrentsongaction(playlist[randomindex]));
        break;
      case 2:
        dispatch(
          getcurrentsongaction(playlist[(currentindex + 1) % playlist.length])
        );
        break;
      default:
        break;
    }
    //避免自动播放造成的错误
    audioref.current.play().then(
      (res) => {},
      (err) => {}
    );
  };
  const currentimg = currentsong.al && currentsong.al.picUrl;
  const currentsongname = currentsong.ar && currentsong.ar[0].name;
  const currentsingername = currentsong && currentsong.name;
  const currentime = formatMinuteSecond(currenttime);
  const usehistory = useHistory();

  return (
    <div className="musicplayer">
      <div className="left">
        <span
          className="iconfont icon-shangyishou"
          onClick={(e) => changeplaymusic(-1)}
        ></span>
        <span
          className={
            musicisplay
              ? "iconfont icon-zanting_huaban1"
              : "iconfont icon-24gf-playCircle"
          }
          onClick={(e) => playmusic()}
        ></span>
        <span
          className="iconfont icon-xiayishou"
          onClick={(e) => changeplaymusic(1)}
        ></span>
      </div>
      <div className="middle">
        <img
          src={currentimg}
          alt=""
          onClick={(e) => usehistory.push("/discover/playerpage")}
        />
        <div className="middlecont">
          <div className="top">
            <span>{currentsongname}</span>
            <span
              style={{ color: "gray" }}
              className="iconfont icon-lianjie"
            ></span>
            <span>{currentsingername}</span>
            <span
              style={{ color: "gray" }}
              className="iconfont icon-lianjie"
            ></span>
          </div>
          <div className="bottom">
            <div className="slider">
              <Slider
                value={slidervalue}
                style={{ width: 400 }}
                disabled={false}
                onChange={changeslider}
                onAfterChange={afterchangeslider}
              />
            </div>
            <div className="time">
              {currentime}/{formatMinuteSecond(alltime)}
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="rightleft">
          <span className="iconfont icon-shoucang"></span>
          <span className="iconfont icon-fenxiang"></span>
        </div>
        <div className="rightright">
          <span className="iconfont icon-shengyin_shiti"></span>
          <Tooltip
            placement="topLeft"
            title={playordertooltip}
            arrowPointAtCenter
          >
            <span className={playordericon} onClick={changeplayorder}></span>
          </Tooltip>
          <Button
            style={{ marginTop: 5 }}
            type="primary"
            shape="round"
            icon={<span className="iconfont icon-24gf-playlistMusic2"></span>}
            onClick={(e) => setPlaylistcomisappera(!playlistcomisappera)}
          >
            {playlist.length}
          </Button>
        </div>
      </div>
      <audio
        ref={audioref}
        onTimeUpdate={timeupdate}
        onEnded={musicend}
      ></audio>
      {playlistcomisappera && (
        <div className="lyricandmusiclist">
          <Playlist></Playlist>
          <Lyriclist></Lyriclist>
        </div>
      )}
    </div>
  );
});
