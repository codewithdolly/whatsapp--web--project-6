import React from "react";
import "./WhatsAppWeb.scss";
import Avatar from "@mui/material/Avatar";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "./Sidebar/Sidebar";
import profileImg from "../Images/dolly2.jpg";
import ChatBox from "./ChatBox/ChatBox";

const WhatsAppWeb = () => {
  return (
    <>
      <div className="whatsapp"></div>
      <div className="whatsappMain">
        <div className="whatsappMain--left">
          {/* sidebar */}
          <div className="whatsappMain--left--top">
            {/* profile */}
            <Avatar>
              <img src={profileImg} alt="dolly" width="40px" />
            </Avatar>
            <div className="whatsappMain--left--top--icons">
              <AutorenewIcon className="whatsappMain--left--top--icons--icon" />
              <ChatIcon className="whatsappMain--left--top--icons--icon" />
              <MoreVertIcon />
            </div>
          </div>
          <div className="whatsappMain--left--searchbar">
            {/* searchBar */}
            <div className="whatsappMain--left--searchbar--search">
              <SearchIcon className="whatsappMain--left--searchbar--search--icon" />
              <input
                type="text"
                placeholder="Search or start new chat"
                className="whatsappMain--left--searchbar--search--imput"
              />
            </div>
          </div>
          {/* sidebar */}
          <Sidebar />
        </div>

        <div className="whatsappMain--right">
          {/* chaat box */}
          <ChatBox />
        </div>
      </div>
    </>
  );
};

export default WhatsAppWeb;
