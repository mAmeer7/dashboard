/* eslint-disable no-unused-vars */
import React from 'react'
import { Container, Box } from "@mui/material";
import PieChart from '../../components/PieChart';
import Header from "../../components/Header";

export default function Pie() {
  return (
    <Container>
    <Header title='PIE CHART'/>
  <Box height={"70vh"}>
    <PieChart />
  </Box>
</Container>
  )
}
