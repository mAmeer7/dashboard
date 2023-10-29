/* eslint-disable react/prop-types */

import {Box, useTheme} from '@mui/material';
import { token } from '../theme';

export default function ProgressCircle({progress = "0.75", size = "40"}) {

    const theme= useTheme()
    const color= token(theme.palette.mode)
    const angle=  progress * 360;


    return(
        <Box  sx={{
            background: `radial-gradient(${color.indigo[600]} 55%, transparent 56%),
                conic-gradient(transparent 0deg ${angle}deg, ${color.blue[500]} ${angle}deg 360deg),
                ${color.indigo[200]}`,
            borderRadius: "50%",
            width: `${size}px`,
            height: `${size}px`,
          }}>

        </Box>


    )
 
}
