import * as React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { token } from "../../theme";
import drawerItems from "./DrawerList";
import { Link } from "react-router-dom";
import dummy from "../../assets/img/dummy-transparent.png";

export default function Sidebar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const theme = useTheme();
  const colors = token(theme.palette.mode);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    
      sx={{
        backgroundColor: `${colors.indigo[700]}`,
        height: "100vh",
        width: "250px",
        
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{width:'100%',
      display:'flex',
      justifyContent:'center',
      flexDirection:"column",
      alignItems:'center',
      marginTop:'0.8em'
      }}>
        <img style={{ width: "50%", paddingBottom:"0.5em" }} src={dummy} alt="" />
        <h3 style={{margin:'0 0 0.5em 0', fontFamily:"cursive", color:'white'}}>Joy Ray</h3>
      </div>
      <Divider />

      <List>
        {drawerItems.map((element, index) => (
          <Link
            key={index}
            to={element.path}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{element.icon}</ListItemIcon>
                <ListItemText primary={element.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <IconButton
        style={{ marginLeft: ".5em" }}
        onClick={toggleDrawer("left", true)}
      >
        <DensityMediumIcon />
      </IconButton>
      <Drawer
     
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
