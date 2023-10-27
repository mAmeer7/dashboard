import { Box, Container,Typography,useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../components/Header';
import {mockDataTeam} from '../../data/mockdata'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { token } from '../../theme';


export default function Team() {
const theme= useTheme()

const colors = token(theme.palette.mode);
  
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
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
            field: 'access',
            headerName: 'Access',
            flex:1,
            headerAlign:'center',
            editable: true,
            renderCell:( {row:{access}} )=>{
              return (

                <Box
                width='60%'
                m='0 auto'
                p='5px'
                display='flex'
                justifyContent='center'
                backgroundColor={access==='admin'?'#3B7A57':'#D2B55B'}
                borderRadius={'4px'}
                >
                  {access==='admin'? <AdminPanelSettingsIcon/>:<PersonOutlineIcon/>}
                  <Typography paddingLeft={'3px'}>
                  {access}
                  </Typography>
                 
                </Box>
              )

            }
          },
      ];
      
  return (

    <Container>
        <Header title='TEAM' subtitle='Manage Here'></Header>
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
          height:'75vh', width: '100%' }}>
      <DataGrid
        rows={mockDataTeam}
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
      />
    </Box>
    </Container>
   
  )
}
