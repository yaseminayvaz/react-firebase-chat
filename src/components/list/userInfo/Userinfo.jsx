import "./userInfo.css";
import { useUserStore } from "../../../lib/userStore";
const Userinfo = () => {
  const { currentUser } = useUserStore();

  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="more" />
        <img src="./video.png" alt="more" />
        <img src="./edit.png" alt="more" />

      </div>
    </div>
  )
}

export default Userinfo;