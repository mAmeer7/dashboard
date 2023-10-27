import { Box, Container, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { mockDataInvoices } from "../../data/mockdata";

import { token } from "../../theme";

export default function Invoices() {
  const theme = useTheme();

  const colors = token(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", width: 15 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      editable: true,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      editable: true,
      headerAlign:'center',
      align:"center",
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      type:'number',
      headerAlign:'center',
      align:"center",
      renderCell: ({ row: cost }) => {
        return (
          <Box>
            <Typography>₹ {cost.cost}</Typography>
          </Box>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      editable: true,
    },
  ];

  

  return (
    <Container>
      <Header title="INVOICES" subtitle="All of your connections"></Header>
      <Box
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: `${colors.blue[600]}`,
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: `${colors.blue[600]}`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.blue[200]}`,
          },
          height: "75vh",
          width: "100%",
        }}
      >
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 11,
              },
            },
          }}
          pageSizeOptions={[11]}
          density="standard"
          disableRowSelectionOnClick
         
        />
      </Box>
    </Container>
  );
}
