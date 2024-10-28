import React, {useState} from 'react'
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ModalClose from "@mui/joy/ModalClose";
import { Link, useLocation, useNavigate } from "react-router-dom";
import WidgetsIcon from "@mui/icons-material/Widgets";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Profile from "../../assets/images/profile.png";

export default function Nav() {



  const [open, setOpen] = React.useState(false);
  let location = useLocation();

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(inOpen);
    };

  return (
    <Box sx={{ display: "flex", marginBottom: "4rem" }}>
      <div className="z-20 fixed flex bg-blue-900 w-full border-b-2 border-bottom border-cyan-400 p-2 px-4">
          <button className="w-12 h-12 my-auto" onClick={toggleDrawer(true)}>
            <WidgetsIcon fontSize="large" sx={{color:"rgb(34 211 238)"}}></WidgetsIcon>
          </button>
          <p className="text-xl mx-auto font-semibold text-cyan-400 my-auto">Terat Burami's Resume</p>
          <img className="object-cover rounded-full w-10 h-10 my-auto" src={Profile} alt="" />
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)} color="primary" variant="soft" size="sm">
        <ModalClose />
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}

        >
          <List>
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "bg-cyan-700/25 rounded-full flex mt-24 mb-8 text-center font-bold text-xl p-2 text-cyan-800 drop-shadow-4xl place-items-center mx-auto"
                  : "flex mt-24 mb-8 text-center font-bold text-lg p-2 text-cyan-500 place-items-center mx-auto"
              }
            >
              <HomeIcon fontSize={location.pathname === "/"? "medium":"small"} sx={{marginRight:"4px"}}></HomeIcon> <p>Home</p>
            </Link>
          </List>
          <List>
            <div className="w-11/12 h-0.5 bg-cyan-400 mx-auto"></div>
          </List>
          <List>
            <Link
              to="/experiences"
              className={
                location.pathname === "/experiences"
                  ? "bg-cyan-700/25 rounded-full flex mt-8 mb-8 text-center font-bold text-xl p-2 text-cyan-800 drop-shadow-4xl place-items-center mx-auto"
                  : "flex mt-8 mb-8 text-center font-bold text-lg p-2 text-cyan-500 place-items-center mx-auto"
              }
            >
              <EmojiEventsIcon fontSize={location.pathname === "/activity"? "medium":"small"} sx={{marginRight:"4px"}}></EmojiEventsIcon> <p>Activities</p>
            </Link>
          </List>
          <List>
            <div className="w-11/12 h-0.5 bg-cyan-400 mx-auto"></div>
          </List>
          <List>
            <Link
              to="/projects"
              className={
                location.pathname === "/projects"
                  ? "bg-cyan-700/25 rounded-full flex mt-8 mb-8 text-center font-bold text-xl p-2 text-cyan-800 drop-shadow-4xl place-items-center mx-auto"
                  : "flex mt-8 mb-8 text-center font-bold text-lg p-2 text-cyan-500 place-items-center mx-auto"
              }
            >
              <SmartToyIcon fontSize={location.pathname === "/project"? "medium":"small"} sx={{marginRight:"4px"}}></SmartToyIcon> <p>Projects</p>
            </Link>
          </List>
        </Box>
       </Drawer>
     </Box>

  );
}
