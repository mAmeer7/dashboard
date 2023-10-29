/* eslint-disable react-hooks/rules-of-hooks */
import Header from "../../components/Header";
import { Box, Container, useTheme, Button, Typography } from "@mui/material";
import { token } from "../../theme";
import { mockTransactions } from "../../data/mockdata";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatBox from "../../components/Statbox";

//charts
import PieChart from "../../components/PieChart";
import BarChart from "../../components/BarChart";
import GeoChart from "../../components/GeoChart";


export default function index() {
  const theme = useTheme();
  const color = token(theme.palette.mode);
  return (
   
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Header title="DASHBOARD" subtitle="Wecome to your dashboard" />
          <Box>
            <Button
              sx={{
                backgroundColor: "#3B7A57",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <DownloadOutlinedIcon sx={{ mr: "10px" }} />
              Download Reports
            </Button>
          </Box>
        </Box>

        {/* GRID */}

        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {/* ROW! */}
          <Box
            borderRadius={"10px"}
            gridColumn="span 3"
            backgroundColor={color.indigo[800]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.14"
              increase="+14%"
              icon={
                <EmailIcon sx={{ color: color.blue[300], fontSize: "16px" }} />
              }
            />
          </Box>

          <Box
            borderRadius={"10px"}
            gridColumn="span 3"
            backgroundColor={color.indigo[800]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="21,556"
              subtitle="Sales"
              progress="0.6"
              increase="+60%"
              icon={
                <PointOfSaleIcon
                  sx={{ color: color.blue[300], fontSize: "16px" }}
                />
              }
            />
          </Box>
          <Box
           borderRadius={'10px'}
          gridColumn="span 3"
          backgroundColor={color.indigo[800]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
         <StatBox
            title="2,441"
            subtitle="New Clients"
            progress="0.1"
            increase="+10%"
            icon={
              <PersonAddIcon
                sx={{ color: color.blue[300], fontSize: "16px" }}
              />
            }
          />


        </Box>
        <Box
           borderRadius={'10px'}
          gridColumn="span 3"
          backgroundColor={color.indigo[800]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
         <StatBox
            title="1,32,513"
            subtitle="Traffic"
            progress="0.8"
            increase="+80%"
            icon={
              <TrafficIcon
                sx={{ color: color.blue[300], fontSize: "16px" }}
              />
            }
          />


        </Box>

        {/* ROW2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={color.indigo[800]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${color.blue[500]}`}
            colors={'#fff'}
            p="15px"
          >
            <Typography color={'#d9d9d9'} variant="h5" fontSize={'16px'} fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`1px solid ${color.blue[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={'#d9d9d9'}
                  variant="h5"
                  fontWeight="600"
                  fontSize={'14px'}
                  fontFamily={'monospace'}
                >
                  {transaction.txId}
                </Typography>
                <Typography fontSize={'12px'} color={'#d9d9d9'}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={color.blue[100]}>
                <Typography fontSize={'12px'}>
                {transaction.date}
                  </Typography> </Box>
              <Box
                backgroundColor={color.indigo[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ₹ {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>


        {/* ROW3 */}

        <Box
        borderRadius={'10px'}
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={color.indigo[800]}
          p="30px"
        >
          <Typography fontSize={'16px'} variant="h6" fontWeight="600">
            Campaign-    $48,352 revenue generated
          </Typography>
          <Box
          height={'200px'}
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <PieChart isDashboard={true} />
           
           
          </Box>
        </Box>
        <Box
        borderRadius={'10px'}
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={color.indigo[800]}
        >
          <Typography
            variant="h6"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
        borderRadius={'10px'}
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={color.indigo[800]}
          padding="30px"
        >
          <Typography
            variant="h6"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="150px">
            <GeoChart isDashboard={true} />
          </Box>
        </Box>
    

        </Box>
      </Container>
  
  );
}
