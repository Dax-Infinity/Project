import { Button } from '@mui/material'
import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function DashBoard() {
  const loginPath = useNavigate();
  return (
    <div className='nevubar'>
    <Button variant='contained' id='navbtn' color='error' onClick={()=> loginPath('/')}>Log Out</Button>
    </div>
  )
}
