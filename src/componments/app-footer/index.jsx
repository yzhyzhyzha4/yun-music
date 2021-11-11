import React, { memo } from "react";
import { Avatar } from "antd";
import { UserOutlined, AntDesignOutlined } from "@ant-design/icons";
import "./footer.css";
export default memo(function Appfooter() {
  return (
    <div className="Appfooter">
      <div className="footerleft">
        <div>
          <a href="https://st.music.163.com/official-terms/service">服务条款</a>
          <a href="https://st.music.163.com/official-terms/privacy">隐私政策</a>
          <a href="https://st.music.163.com/official-terms/children">
            儿童隐私政策
          </a>
          <a href="https://music.163.com/st/staticdeal/complaints.html">
            版权投诉指引
          </a>
          <a href="#/">意见反馈</a>
          <a href="#/">广告合作</a>
        </div>
        <div>
          <span>网易公司版权所有©1997-2021</span>
          <span>杭州乐读科技有限公司运营</span>
          <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png">
            浙网文[2021] 1186-054号
          </a>
        </div>
        <div>
          <span>违法和不良信息举报电话：0571-89853516</span>
          <span>举报邮箱：ncm5990@163.com</span>
        </div>
        <div>
          <span>粤B2-20090191-18 工业和信息化部备案管理系统网站</span>
          <span> 浙公网安备 33010902002564号</span>
        </div>
      </div>
      <div className="footright">
        <div>
          <Avatar icon={<UserOutlined />} /> <br />
          <span>用户认证</span>
        </div>
        <div>
          <Avatar
            icon={<UserOutlined />}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <br />
          <span>独立音乐人</span>
        </div>
        <div>
          <Avatar icon={<AntDesignOutlined />} /> <br />
          <span>赞赏</span>
        </div>
        <div>
          <Avatar icon={<UserOutlined />} /> <br />
          <span>视频奖励</span>
        </div>
      </div>
    </div>
  );
});
