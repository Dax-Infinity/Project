import './App.css';
import {  styled, TableCell,  TableRow, tableCellClasses } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
let dot = ''
function Card({user}) {
    if (user.status === "shipped"){
        dot = "error"
    }
    if (user.status === "completed"){
        dot = "success"
    }
    if (user.status === "processing"){
        dot = "primary"
    }
    return (
        <>
            <StyledTableRow id="cell">
                    <StyledTableCell align="left">{user.order_id}</StyledTableCell>
                    <StyledTableCell align="left">{user.order_size}</StyledTableCell>
                    <StyledTableCell align="left">{user.Full_Name}</StyledTableCell>
                    <StyledTableCell align="left">{user.user_city}</StyledTableCell>
                    <StyledTableCell align="left">{user.Order_price}</StyledTableCell>
                    <StyledTableCell align="left"><FiberManualRecordIcon color={dot} id= 'dot'/>{user.status}</StyledTableCell>
                    <StyledTableCell align="left">{user.contact_us}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                    </StyledTableCell>
            </StyledTableRow>
        </>
    );
}
export default Card;