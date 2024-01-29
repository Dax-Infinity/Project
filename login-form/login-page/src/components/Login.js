import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
    const path = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const getData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const toServer = async (e) => {
        if (data.email.trim() === "" ||
            data.password.trim() === "") {
            return alert("please fill fields");
        }
        else {
            const ans = await axios.post("http://localhost:4000/login", data);
            setData({
                email: "",
                password: "",
            });
            console.log("ok");
            if (ans.data.token !== "") {
                localStorage.setItem("token", ans.data.token)
                return path('/dashboard')
                window.location.reload(false)
            }
        }
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
                <h1>Login</h1>
                <form onSubmit={toServer}>
                    <div className="txt_field">
                        <TextField
                            className='inputField2'
                            id="standard-multiline-flexible"
                            label="Email"
                            multiline
                            maxRows={4}
                            variant="standard"
                            onChange={getData}
                            value={data.email}
                            name='email'
                        />
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                name='password'
                                onChange={getData}
                                value={data.password}
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
                    <div className='btn' onClick={toServer}>Log In</div>
                    <div className="signup_link">
                        Not a Member? <span onClick={() => loginPath('/register')}>Register</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
