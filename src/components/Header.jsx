/* eslint-disable react/prop-types */
import { Box , Typography} from '@mui/material'


export default function Header(props) {


const {title, subtitle}= props

  return (
    <Box mb='30px'> 
    <Typography variant='h2' color={'white'} style={{fontSize:"3em", fontFamily:'Souce Sans 3'}} >
        {title}
    </Typography>
    <Typography variant='h5' color={'white'} fontSize={20} style={{fontSize:"1em",color:" #00A693", fontFamily:'monospace'}}>
        {subtitle}
    </Typography>

    </Box>
  )
}
