import "./userInfo.css"
const Userinfo=()=>{
    return(
        <div className="userInfo">
           <div className="user">
             <img src="./avatar.png" alt="" />
             <h2>Jhon Doe</h2>
           </div>
           <div className="icons">
            <img src="./more.png"alt="more"/>
            <img src="./video.png"alt="more"/>
            <img src="./edit.png"alt="more"/>

           </div>
        </div>
    )
}

export default Userinfo;