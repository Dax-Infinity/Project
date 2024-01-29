import './App.css';
import { Button, Table, TableBody, TableContainer, Paper, styled, TableCell, TableHead, TableRow } from '@mui/material';
import img from 'C:/Users/HP/OneDrive/Pictures/Saved Pictures/1683626062333.jpg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from './json';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
 
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




function App() {
  const data = [
    {
      "order_id": 2,
      "order_size": 1,
      "Full_Name": "oleta Langosh",
      "user_city": "San Francisco",
      "Order_price": "$48",
      "status": 'shipped',
      "contact_us": '02/01/2019'

    },
    {
      "order_id": 5,
      "order_size": 2,
      "Full_Name": "Myrtie Bauch",
      "user_city": "Seattle",
      "Order_price": "$280",
      "status": 'completed',
      "contact_us": '02/01/2019'
    },
    {
      "order_id": 3,
      "order_size": 2,
      "Full_Name": "Freeda Quigley",
      "user_city": "chicago",
      "Order_price": "$133",
      "status": 'shipped',
      "contact_us": '02/01/2019'

    },
    {
      "order_id": 1,
      "order_size": 3,
      "Full_Name": "Luna Rath",
      "user_city": "Seattle",
      "Order_price": "$335",
      "status": 'shipped',
      "contact_us": '02/01/2019'

    },
    {
      "order_id": 6,
      "order_size": 3,
      "Full_Name": "Raphael ratke",
      "user_city": "Palo alto",
      "Order_price": "$483",
      "status": 'shipped',
      "contact_us": '02/01/2019'

    },
    {
      "order_id": 4,
      "order_size": 2,
      "Full_Name": "Joshuab Brakus",
      "user_city": "Chicago",
      "Order_price": "$293",
      "status": 'completed',
      "contact_us": '02/01/2019'

    },
    {
      "order_id": 7,
      "order_size": 1,
      "Full_Name": "Hal Sauer",
      "user_city": "Mountain View",
      "Order_price": "$94",
      "status": 'completed',
      "contact_us": '02/01/2019'

    },
    {
      "order_id": 9,
      "order_size": 2,
      "Full_Name": "Dock Gusikowski",
      "user_city": "New York",
      "Order_price": "$254",
      "status": 'processing',
      "contact_us": '02/01/2019'

    },
    {
      "order_id": 8,
      "order_size": 2,
      "Full_Name": "Hope Jast",
      "user_city": "Austin",
      "Order_price": "$305",
      "status": 'completed',
      "contact_us": '02/01/2019'

    },
    {
      "order_id": 11,
      "order_size": 1,
      "Full_Name": "Devan Yundit",
      "user_city": "San Fransisco",
      "Order_price": "$81",
      "status": 'shipped',
      "contact_us": '02/01/2019'

    },
  ]
  return (
    <>
      <div className='sidebar'>
        <div className='sidetext'>
          <img src={img} id='img' alt='img' />
          <h4>SOME NAME</h4>
          <h6>Web Devloper</h6>
          <hr id="line"></hr>

          <Button variant="text" id="dashboard1"><DashboardIcon id="padding" htmlColor='grey' />Dashboard</Button><br></br>
          <Button variant="text" id="dashboard2" color='secondary'><EventNoteIcon id="padding"/>Orders</Button>
        </div>
        {/* ------------------------------------ */}
        <div className='main'>
          <div className='size'>
            {/* table head  */}
            <TableContainer component={Paper} id='table'>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead >
                  <TableRow id='tablehead'>
                    <StyledTableCell align="left" >Order_id</StyledTableCell>
                    <StyledTableCell align="left">Ordersize</StyledTableCell>
                    <StyledTableCell align="left">Full_Nmae</StyledTableCell>
                    <StyledTableCell align="left">User_City</StyledTableCell>
                    <StyledTableCell align="left">Order_Price</StyledTableCell>
                    <StyledTableCell align="left">Status</StyledTableCell>
                    <StyledTableCell align="left">Create_at</StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* mapping */}
                  {data.map((user) => (<Card user={user} />))}
                  {/* mapping */}

                  {/*table bottom */}
                  <StyledTableRow>
                    <StyledTableCell colSpan={7}><span className='row'>Rows per page:10 <ArrowDropDownIcon id="down" /></span> <span className='to'>1-10 of 500</span><ArrowBackIosIcon id="aer1" color='erro' htmlColor='grey' />< ArrowForwardIosIcon id="aer2" htmlColor='grey '/></StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;