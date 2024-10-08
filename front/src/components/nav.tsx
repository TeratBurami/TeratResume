import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import MenuLogo from "../assets/images/menu.png";
import ModalClose from "@mui/joy/ModalClose";
import { Link, useLocation } from "react-router-dom";


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
    <Box sx={{ display: "flex"}}>
      <button className="w-12 h-12 m-2 fixed" onClick={toggleDrawer(true)}>
        <img src={MenuLogo} alt="" />
      </button>
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
                  ? "mt-24 mb-8 text-center font-bold text-4xl p-2 text-cyan-800 drop-shadow-4xl"
                  : "mt-24 mb-8 text-center font-bold text-lg p-2 text-cyan-500"
              }
            >
              Home
            </Link>
          </List>
          <List>
            <div className="w-11/12 h-0.5 bg-cyan-400 mx-auto"></div>
          </List>
          <List>
            <Link
              to="/skill"
              className={
                location.pathname === "/skill"
                  ? "mt-8 mb-8 text-center font-bold text-4xl p-2 text-cyan-800 drop-shadow-4xl"
                  : "mt-8 mb-8 text-center font-bold text-lg p-2 text-cyan-500"
              }
            >
              Skills
            </Link>
          </List>
          <List>
            <div className="w-11/12 h-0.5 bg-cyan-400 mx-auto"></div>
          </List>
          <List>
            <Link
              to="/competition"
              className={
                location.pathname === "/competition"
                  ? "mt-8 mb-8 text-center font-bold text-4xl p-2 text-cyan-800 drop-shadow-4xl"
                  : "mt-8 mb-8 text-center font-bold text-lg p-2 text-cyan-500"
              }
            >
              Competitions
            </Link>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
