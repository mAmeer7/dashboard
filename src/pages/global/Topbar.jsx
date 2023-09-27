import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, token } from "../../theme";
import styles from "./style.module.css";

//icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export default function Topbar() {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  
  const colorMode = useContext(ColorModeContext);
  console.log(colorMode.toggleColorMode);
  return (
    <Box className={styles.mainBox}>
      <Box display="flex" backgroundColor={colors.indigo[200]} borderRadius="5px">
      
        <InputBase sx={{ml:2,flex:1}} placeholder="Search"/>
        <IconButton>
          <SearchOutlinedIcon/>
        </IconButton>
      </Box>

      {/* Icons */}
<Box display='flex'>
  
  <IconButton>
    <NotificationsOutlinedIcon/>
  </IconButton>
  <IconButton>
    <PermIdentityOutlinedIcon/>
  </IconButton>


  <IconButton onClick={colorMode.toggleColorMode}>
    {theme.palette.mode==="dark"?<LightModeOutlinedIcon/>:<DarkModeOutlinedIcon/>}
  </IconButton>
  


</Box>
      
    </Box>
  );
}
