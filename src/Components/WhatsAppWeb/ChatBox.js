import React from "react";
import "./ChatBox.scss";
import Avatar from "@mui/material/Avatar";
import Mom from "../Images/mom.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import bgImg from "../Images/bg1.jpg"

const ChatBox = () => {
  return (
    <>
    <div className="chat">
      <div className="chat--chatBox">
        <div className="chat--chatBox--name">
          <Avatar>
            <img src={Mom} alt="dolly" width="40px" />
          </Avatar>
          <p>
            Mom
            <FavoriteIcon className="heart" />
          </p>
        </div>
        <div>
          <SearchIcon />
          <MoreVertIcon />
        </div>
        </div>
      <div className="chat--chatBox--bg" >
      <div  className="chat--chatBox--bg--date" >
        today
      </div>
      </div>
      </div>
    </>
  );
};

export default ChatBox;
