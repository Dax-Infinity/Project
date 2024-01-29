import React from 'react'
import { Box, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
export default function LoginPage() {

  const loginPath = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [check, setCheck] = useState(true)
  const Click = (e) => {
    if (e.target.value !== "") {
      setCheck(false)
    } else {
      setCheck(true)
    }
  }
  const [check2, setCheck2] = useState(true)
  const Click2 = (e) => {
    if (e.target.value !== "") {
      setCheck2(false)
    } else {
      setCheck2(true)
    }
  }


  return (
    <div>
      <div className="overlay">
        <form>
          <h2>Log In</h2>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className='input-geids'>
                <AccountCircle sx={{ color: 'action.active', mr: -0.5, my: 1.5 }} size='large' />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                  <TextField name="email" id="input-with-sx" label="Email Id" variant="standard" onChange={Click} color='success' className='input-id' />
                </FormControl>
              </Box>

            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className='input-pass'>
                <LockIcon sx={{ color: 'action.active', mr: -0.5, my: 1.5 }} />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password" color='success'>Password</InputLabel>
                  <Input name="pass"
                    onChange={Click2}
                    id="standard-adornment-password"
                    className='input-password'
                    color='success'
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
              <p className='text'>Forgot Password ?</p>
            </Grid>
          </Grid>
          <button disabled={check || check2} onClick={() => loginPath('/dashboard')}>Log In</button>
        </form>
      </div>
    </div>
  )
}