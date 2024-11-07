import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ModalClose from "@mui/joy/ModalClose";
import { Link, useLocation } from "react-router-dom";
import WidgetsIcon from "@mui/icons-material/Widgets";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import "./nav_style.css";
import { useMediaQuery } from "@mui/material";

export default function Nav() {
  const match_media = useMediaQuery("(min-width:600px)");
  const [open, setOpen] = useState(false);
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
      <div className="w-full fixed z-20 top-0">
        <div className="navbar z-0 left-0 w-full h-16"></div>
        <div className="relative z-20 flex w-full p-2 px-4">
          <button
            className="w-fit h-fit px-1 pb-1 pt md:p-1.5 my-auto rounded boxShadow"
            onClick={toggleDrawer(true)}
          >
            <WidgetsIcon
              className="colorFade"
              fontSize={match_media ? "medium" : "small"}
              sx={{}}
            ></WidgetsIcon>
          </button>
          <div className="boxShadow rounded mx-auto p-1 px-4 md:p-2 md:px-6 w-fit h-fit my-auto">
            <p className="colorFade text-base md:text-xl font-semibold my-auto">
              Terat Burami's Resume
            </p>
          </div>
          <img
            className="object-cover rounded-full w-10 h-10 my-auto"
            src="/profile.png"
            alt=""
          />
        </div>
      </div>

      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        color="primary"
        variant="soft"
        size="sm"
      >
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
              <HomeIcon
                fontSize={location.pathname === "/" ? "medium" : "small"}
                sx={{ marginRight: "4px" }}
              ></HomeIcon>{" "}
              <p>Home</p>
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
              <EmojiEventsIcon
                fontSize={
                  location.pathname === "/activity" ? "medium" : "small"
                }
                sx={{ marginRight: "4px" }}
              ></EmojiEventsIcon>{" "}
              <p>Activities</p>
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
              <SmartToyIcon
                fontSize={location.pathname === "/project" ? "medium" : "small"}
                sx={{ marginRight: "4px" }}
              ></SmartToyIcon>{" "}
              <p>Projects</p>
            </Link>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}