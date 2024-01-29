import { Button } from '@mui/material'
import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const loginPath = useNavigate();
  
  
  return (
    <div className='nevubar'>
       <Button variant='contained' id='navbtn' onClick={()=> loginPath('./login')}>Log in</Button>
    </div>
  )
}
