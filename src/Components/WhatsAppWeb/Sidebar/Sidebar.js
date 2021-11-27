import React from "react";
import "./Sidebar.scss";
import Avatar from "@mui/material/Avatar";
import PushPinIcon from "@mui/icons-material/PushPin";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const Sidebar = () => {
  return (
    <>
      <div className="sidebarLeft">
        {profiles.map((profile) => (
          <div className="sidebarLeft--sidebar">
            <div className="sidebarLeft--sidebar--name">
              <Avatar>
                <img src={profile.img} alt={profile.alt} width="40px" />
              </Avatar>
              <div style={{ alignItems: "center" }}>
                <p>
                  {profile.name} {profile.nameIcon}
                </p>
                <p style={{ marginLeft: "15px", fontSize: "10px" }}>
                  {profile.status}
                  {profile.SentImg}
                  {profile.chat}
                </p>
              </div>
            </div>

            <p>
              {profile.date} <br /> {profile.pin}
            </p>
          </div>
        ))}
        
      </div>
    </>
  );
};

export default Sidebar;

const profiles = [
  {
    name: `Iamthegreatest✊✌️❤️`,
    img: "process.env.PUBLIC_URL + ../../Images/laptop.jpg",
    alt: "myProup",
    date: "4:25 pm",
    pin: <PushPinIcon className="pin" />,
    status: "",
    status: <DoneAllIcon sx={{ fontSize: "small", marginRight: "3px" }} />,
    SentImg: "",
    chat: "Complete Reducer methos",
  },
  {
    name: `Mom`,
    img: "process.env.PUBLIC_URL + ../../Images/mom.jpg",
    alt: "mom",
    nameIcon: <FavoriteIcon className="heart" />,
    date: "12:45 pm",
    pin: <PushPinIcon className="pin" />,
    status: "",
    SentImg: <CameraAltIcon sx={{ fontSize: "small", marginRight: "3px" }} />,
    chat: "Photo",
  },
  {
    name: "Rana Sir✨",
    img: `process.env.PUBLIC_URL + "../../Images/rana.jpg`,
    alt: "Rana",
    date: "10:25 am",
    pin: "",
    status: <DoneAllIcon sx={{ fontSize: "small", marginRight: "3px" }} />,
    SentImg: "",
    chat: "Hello Sir, Good Morning!",
  },
  {
    name: "Nagaraju Sir @Hicoder",
    img: `process.env.PUBLIC_URL + "../../Images/nagaraju.jpg`,
    alt: "Nagaraju",
    date: "09/11/2021",
    pin: "",
    status: <DoneAllIcon sx={{ fontSize: "small", marginRight: "3px" }} />,
    SentImg: "",
    chat: "Hello Sir, Good Morning!",
  },
  {
    name: "Kiran🎭 #Wipro",
    img: `process.env.PUBLIC_URL + "../../Images/kiran.jpg`,
    alt: "mom",
    date: "20/11/2021",
    pin: "",
    status: "",
    SentImg: "",
    chat: "Hey dude",
  },
  {
    name: "Mr. DJ",
    img: `process.env.PUBLIC_URL + "../../Images/dj.jpg`,
    alt: "DJ",
    date: "09/15/2021",
    pin: "",
    status: "",
    SentImg: "",
    chat: "Good Morning",
  },

  {
    name: "Women in Tech #Hyd",
    img: `process.env.PUBLIC_URL + "../../Images/wordpress.jpg`,
    alt: "wordpress",
    date: "09/11/2021",
    pin: "",
    status: "",
    SentImg: "",
    chat: "+91 87908 25832 - www.crio.do/phonepe-tech-scholars-program/",
  },

  {
    name: "Manas Sir @Avontix",
    img: `process.env.PUBLIC_URL + "../../Images/manas.jpg`,
    alt: "Manas",
    nameIcon: "",
    date: "10/11/2021",
    pin: "",
    status: "",
    SentImg: <CameraAltIcon sx={{ fontSize: "small", marginRight: "3px" }} />,
    chat: "Photo",
  },

  {
    name: "Bhavani @Avontix",
    img: `process.env.PUBLIC_URL + "../../Images/bhavani.jpg`,
    alt: "Bhavani",
    date: "09/10/2021",
    pin: "",
    status: "",
    SentImg: <CameraAltIcon sx={{ fontSize: "small", marginRight: "3px" }} />,
    chat: "Photo",
  },

  {
    name: "Rakesh Bhaiya #Rajsthan",
    img: `process.env.PUBLIC_URL + "../../Images/rakesh.jpg`,
    alt: "Rakesh",
    date: "20/11/2021",
    pin: "",
    status: "",
    SentImg: "",
    chat: "Hello!",
  },

  {
    name: "Rumi💃",
    img: `process.env.PUBLIC_URL + "../../Images/rumi.jpg`,
    alt: "rumi",
    date: "19/11/2021",
    pin: "",
    status: "",
    SentImg: "",
    chat: "Thank you :)",
  },

  {
    name: "Sahmitha👩‍💻 #Hicoder ",
    img: `process.env.PUBLIC_URL + "../../Images/sam.jpg`,
    alt: "sam",
    date: "15/11/2021",
    pin: "",
    status: "",
    SentImg: "",
    chat: "yes, its okay!",
  },
  {
    name: "Women Startups Group",
    img: `process.env.PUBLIC_URL + "../../Images/startupGroup.jpg`,
    alt: "Women Startups Group",
    date: "15/11/2021",
    pin: "",
    status: "",
    SentImg: "",
    chat: "+92 305 7100859 - Get IT leads for free at the live video NOW",
  },
  {
    name: "Shubh Mam @personal",
    img: `process.env.PUBLIC_URL + "../../Images/subh.jpg`,
    alt: "mom",
    date: "12/11/2021",
    pin: "",
    status: "",
    SentImg: "",
    chat: "Photo",
  },
  {
    name: "Smita @Avontix",
    img: `process.env.PUBLIC_URL + "../../Images/samita.jpg`,
    alt: "Smita",
    date: "12/10/2021",
    pin: "",
    status: <DoneAllIcon sx={{ fontSize: "small", marginRight: "3px" }} />,
    SentImg: "",
    chat: "Okay, See you Soon!",
  },
];
