// import React, { useState } from "react";
// import instaText from "./asstes/instatext.png";
// import { BiMoviePlay } from "react-icons/bi";
// import "./index.css";

// function SideBar() {
//   const [activeItem, setActiveItem] = useState("Home");

//   const menuItems = [
//     {
//       name: "Home",
//       icon: <i className="bi bi-house-door-fill"></i>,
//     },
//     {
//       name: "Search",
//       icon: <i className="bi bi-search"></i>,
//     },
//     {
//       name: "Explore",
//       icon: <i className="bi bi-compass"></i>,
//     },
//     {
//       name: "Reels",
//       icon: <BiMoviePlay />,
//     },
//     {
//       name: "Message",
//       icon: <i className="bi bi-chat-dots"></i>,
//     },
//     {
//       name: "Notification",
//       icon: <i className="bi bi-heart"></i>,
//     },
//     {
//       name: "Create",
//       icon: <i className="bi bi-plus-square"></i>,
//     },
//     {
//       name: "Profile",
//       icon: <i className="bi bi-person-circle"></i>,
//     },
//   ];

//   return (
//     <div className="m-3">
//       <div className="d-flex flex-column gap-4">

//         <img
//           className="logo"
//           src={instaText}
//           alt="Instagram"
//         />

//         {menuItems.map((item) => (
//           <div
//             key={item.name}
//             className={`menu ${
//               activeItem === item.name ? "active" : ""
//             }`}
//             onClick={() => setActiveItem(item.name)}
//           >
//             {item.icon}
//             <span>{item.name}</span>
//           </div>
//         ))}
//       </div>

//       <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-3">

//         <div
//           className={`menu ${
//             activeItem === "Threads" ? "active" : ""
//           }`}
//           onClick={() => setActiveItem("Threads")}
//         >
//           <i className="bi bi-threads"></i>
//           <span>Threads</span>
//         </div>

//         <div
//           className={`menu ${
//             activeItem === "More" ? "active" : ""
//           }`}
//           onClick={() => setActiveItem("More")}
//         >
//           <i className="bi bi-justify"></i>
//           <span>More</span>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default SideBar;

import React, { useState } from "react";
import instaText from "./asstes/instatext.png";
import { BiMoviePlay } from "react-icons/bi";
import "./index.css";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Home",
      icon: <i className="bi bi-house-door-fill"></i>,
      path: "/",
    },
    {
      name: "Search",
      icon: <i className="bi bi-search"></i>,
      path: "/",
    },
    {
      name: "Explore",
      icon: <i className="bi bi-compass"></i>,
      path: "/",
    },
    {
      name: "Reels",
      icon: <BiMoviePlay size={20} />,
      path: "/",
    },
    {
      name: "Message",
      icon: <i className="bi bi-chat-dots"></i>,
      path: "/",
    },
    {
      name: "Notification",
      icon: <i className="bi bi-heart"></i>,
      path: "/",
    },
    {
      name: "Create",
      icon: <i className="bi bi-plus-square"></i>,
      path: "/",
    },
    {
      name: "Profile",
      icon: <i className="bi bi-person-circle"></i>,
      path: "/profile",
    },
  ];

  const handleClick = (name, path) => {
    setActiveItem(name);
    navigate(path)
  };

  return (
    <div className="sidebar">
      {/* Logo + Main Menu */}
      <div>
        <img className="logo" src={instaText} alt="Instagram" />

        <div className="main-menu">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`menu ${activeItem === item.name ? "active" : ""}`}
              onClick={() => handleClick(item.name, item.path)}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="bottom-menu">
        <div
          className={`menu ${activeItem === "Threads" ? "active" : ""}`}
          onClick={() => setActiveItem("Threads")}
        >
          <i className="bi bi-threads"></i>
          <span>Threads</span>
        </div>

        <div
          className={`menu ${activeItem === "More" ? "active" : ""}`}
          onClick={() => setActiveItem("More")}
        >
          <i className="bi bi-justify"></i>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
