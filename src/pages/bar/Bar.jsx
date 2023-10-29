/* eslint-disable no-unused-vars */
import { Container, Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";
import React from "react";

export default function Bar() {
  return (
    <Container>
        <Header title='BAR CHART'/>
      <Box height={"70vh"}>
        <BarChart />
      </Box>
    </Container>
  );
}
