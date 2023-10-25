import { Box, Container } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../components/Header';
import {mockDataTeam} from '../../data/mockdata'

export default function Team() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Name',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 150,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          width: 90,
          editable: true,
        },
        {
          field: 'phone',
          headerName: 'Phone',
          width: 150,
          editable: true,
        },
        {
            field: 'access',
            headerName: 'Access',
            width: 110,
            editable: true,
          },
      ];
      
  return (

    <Container>
        <Header title='TEAM'></Header>
         <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={mockDataTeam}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        
        pageSizeOptions={[5]}
        density='standard'
        disableRowSelectionOnClick
      />
    </Box>
    </Container>
   
  )
}
