import React from "react";
import "./ChatBox.scss";
import Avatar from "@mui/material/Avatar";
import Mom from "../../Images/mom.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import mom from "../../Images/mom1.jpg";
import { Button } from "@material-ui/core";
import InputBox from "./InputBox/InputBox";

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
            <SearchIcon className="chat--chatBox--icon" />
            <MoreVertIcon className="chat--chatBox--icon" />
          </div>
        </div>
        <div className="chat--chatBox--bg">
          <center>
            <Button className="chat--chatBox--bg--date">Today</Button>
          </center>
          <div className="chat--chatBox--bg--Chats">
            <p className="chat--chatBox--bg--Chats--mom">
              Hello
              <span className="chat--chatBox--bg--Chats--mom--time">
                4:20 am
              </span>
            </p>
            <br />
            <p className="chat--chatBox--bg--Chats--mom">
              Good Morning!🌝
              <span className="chat--chatBox--bg--Chats--mom--time">
                4:20 am
              </span>
            </p>
            <br />
            <div style={{ float: "right" }}>
              <p className="chat--chatBox--bg--Chats--me">
                Good Morning!🌻
                <span className="chat--chatBox--bg--Chats--me--time">
                  8:00 am
                </span>
              </p>
              <br />
              <p className="chat--chatBox--bg--Chats--me">
                Kya Kar rahi Ho
                <span className="chat--chatBox--bg--Chats--me--time">
                  8:00 am
                </span>
              </p>
              <br />
            </div>
            <div className="chat--chatBox--bg--Chats--img">
              Mom <br />
              <img
                src={mom}
                alt="Maa"
                width="250px"
              /><span className="chat--chatBox--bg--Chats--mom--time">
                4:20 am
              </span>
            </div>
          </div>
        </div>
        <InputBox />
      </div>
    </>
  );
};

export default ChatBox;
