import { Box, Container, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Header from '../../components/Header';
import {mockDataContacts} from '../../data/mockdata'
import { token } from '../../theme';


export default function Contact() {
const theme= useTheme()

const colors = token(theme.palette.mode);
  
    const columns = [
        { field: 'id', headerName: 'ID', width: 15 },
        {
          field: 'name',
          headerName: 'Name',
          flex:1,
          editable: true,
          cellClassName: 'name-column--cell'
        },
        {
          field: 'email',
          headerName: 'Email',
          flex:1,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          flex:1,
          headerAlign:'center',
          align:'center',
          editable: true,
        },
        {
          field: 'phone',
          headerName: 'Phone',
          flex:1,
          editable: true,
        },
        {
            field: 'address',
            headerName: 'Address',
           
            editable: true,
            width:300,
          },
          {
            field: 'city',
            headerName: 'City',
            flex:1,
            editable: true,
          },
          {
            field: 'zipCode',
            headerName: 'ZIP',
            flex:1,
            editable: true,
          },
          {
            field: 'registrarId',
            headerName: 'Registrar Id',
            flex:1,
            editable: true,
          },
        
      ];

      
  return (

    <Container>
        <Header title='CONTACTS' subtitle='All of your connections'></Header>
         <Box sx={{ "& .MuiDataGrid-root":{
            border:'none'
         },
         "& .MuiDataGrid-cell":{
          borderBottom:'none'
         },
         "& .MuiDataGrid-footerContainer":{
          borderTop:'none',
          backgroundColor:`${colors.blue[600]}`
         },
         "& .MuiDataGrid-columnHeader":{
          backgroundColor:`${colors.blue[600]}`
         },
         "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
            color:`${colors.blue[200]}`
           },
           
          height:'75vh', width: '100%' }}>
      <DataGrid
        rows={mockDataContacts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 11,
            },
          },
        }}
        
        pageSizeOptions={[11]}
        density='standard'
        disableRowSelectionOnClick
        slots={{toolbar:GridToolbar}}
      />
    </Box>
    </Container>
   
  )
}
