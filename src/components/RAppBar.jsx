import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "@fontsource/roboto/500.css";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function RAppBar({ user, setUser }) {
  let location = useLocation();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "grey" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Job Routing
            </Typography>

            {user ? (
              <>
                <Typography>{user.username}</Typography>
                <Link to="/" onClick={() => setUser(null)}>
                  <Button sx={{ color: "white" }}>Log Out</Button>
                </Link>
              </>
            ) : (
              <Link to="/login" state={{ backgroundLocation: location }}>
                <Button sx={{ color: "white" }}>Log In</Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
