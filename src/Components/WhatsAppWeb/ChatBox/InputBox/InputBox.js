import React, { useState } from "react";
import "./InputBox.scss";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";

const InputBox = () => {
  return (
    <>
      <div className="InputBox">
        <div>
          <EmojiEmotionsOutlinedIcon />
        </div>
        <div>
          <AttachFileOutlinedIcon />
        </div>
        <div className="InputBox--chat">
          <input
            type="text"
            placeholder="Type a message here..."
            className="InputBox--chat--input"
          />
        </div>
        <div>
          <MicOutlinedIcon />
        </div>
      </div>
    </>
  );
};

export default InputBox;
