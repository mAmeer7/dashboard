/* eslint-disable react/prop-types */
import {Box, useTheme, Typography} from '@mui/material';
import { token } from '../theme';
import ProgressCircle from './ProgressCircle';




export default function Statbox(props) {


    const {
       title,
       subtitle,
       icon,
       progress,
       increase 
    }= props;
    const theme= useTheme()
    const color= token(theme.palette.mode)

  return (
    <Box width="100%" m="0 30px">
    <Box display="flex" justifyContent="space-between">
      <Box>
        {icon}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: color.blue[100], fontSize:"20px" }}
        >
          {title}
        </Typography>
      </Box>
      <Box>
        <ProgressCircle progress={progress} />
      </Box>
    </Box>
    <Box display="flex" justifyContent="space-between" mt="2px">
      <Typography variant="h6" sx={{ color: color.indigo[300], fontSize:"16px" }}>
        {subtitle}
      </Typography>
      <Typography
        variant="h5"
        fontStyle="italic"
        sx={{ color: color.indigo[300], fontSize:"16px"  }}
      >{increase}
      </Typography>
    </Box>
  </Box>
  )
}
