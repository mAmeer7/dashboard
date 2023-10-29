import { Container, Box } from "@mui/material";
import GeoChart from "../../components/GeoChart";
import Header from "../../components/Header";
import React from "react";

export default function Geography() {
  return (
    <Container>
        <Header title='GEO CHART'/>
      <Box height={"70vh"}>
        <GeoChart />
      </Box>
    </Container>
  );
}
