import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const getData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };
    console.log(data);
    const toServer = async () => {
        if (
            data.firstName.trim() === "" ||
            data.lastName.trim() === "" ||
            data.email.trim() === "" ||
            data.password.trim() === ""
        ) {
            return;
        }
        console.log(data);
        await axios.post("http://localhost:4000/register", data);
        setData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        });
    };

    const loginPath = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className="container">
            <div className="center">
                <h1>Sign Up</h1>
                <form>

                    <div className="txt_field">
                        <TextField
                            className='inputField2'
                            id="standard-multiline-flexible"
                            label="First name"
                            name="firstName"
                            multiline
                            maxRows={4}
                            variant="standard"
                            onChange={getData}
                            value={data.firstName}
                        />
                        <TextField
                            className='inputField2'
                            id="standard-multiline-flexible"
                            label="Last name"
                            name="lastName"
                            multiline
                            maxRows={4}
                            variant="standard"
                            onChange={getData}
                            value={data.lastName}
                        />
                        <TextField
                            className='inputField2'
                            id="standard-multiline-flexible"
                            label="Email"
                            name="email"
                            multiline
                            maxRows={4}
                            variant="standard"
                            onChange={getData}
                            value={data.email}
                        />
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                onChange={getData}
                                value={data.password}
                                name='password'
                                className='inputField'
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                    <div className="pass">Forget Password?</div>
                    <div className='btn' onClick={() => {
                        toServer();
                        return loginPath('/login')
                    }}> Sign up</div>
                    <div className="signup_link">
                        Already a Member? <span onClick={() => loginPath('/login')}>Log in</span>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default SignUp;
