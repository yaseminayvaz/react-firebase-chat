import { useEffect, useState, useRef } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
const Chat=()=>{
    const [open, setOpen]= useState(false);
    const [text, setText]= useState("");

    const endRef = useRef(null);
    useEffect(()=>{
        endRef.current.scrollIntoView({behavior: "smooth"})
    })
    const handleEmoji = e =>{
        setText(prev=>prev+e.emoji)
        setOpen(false)
    }
    return(
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="icons">
                   <img src="./phone.png" alt="" /> 
                   <img src="./video.png" alt="" /> 
                   <img src="./info.png" alt="" /> 

                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam aperiam vel aliquid sequi, aspernatur tempore voluptatum voluptatibus architecto deserunt laboriosam quis nobis nam ducimus iusto laborum accusantium ab vitae incidunt.</p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam aperiam vel aliquid sequi, aspernatur tempore voluptatum voluptatibus architecto deserunt laboriosam quis nobis nam ducimus iusto laborum accusantium ab vitae incidunt.</p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg" alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam aperiam vel aliquid sequi, aspernatur tempore voluptatum voluptatibus architecto deserunt laboriosam quis nobis nam ducimus iusto laborum accusantium ab vitae incidunt.</p>
                        <span>1 minute ago</span>
                    </div>
                    <div ref={endRef}></div> 
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam aperiam vel aliquid sequi, aspernatur tempore voluptatum voluptatibus architecto deserunt laboriosam quis nobis nam ducimus iusto laborum accusantium ab vitae incidunt.</p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam aperiam vel aliquid sequi, aspernatur tempore voluptatum voluptatibus architecto deserunt laboriosam quis nobis nam ducimus iusto laborum accusantium ab vitae incidunt.</p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message..." value={text}onChange={e=>setText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={()=>setOpen(prev=>!prev)}/>
                    <div className="picker">,
                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>

                    </div>
                    
                </div>
                <button className="sendButton">Send</button>
            </div>

        </div>
    )
}
export default Chat;