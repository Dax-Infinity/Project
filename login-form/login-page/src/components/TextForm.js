import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function TextForm() {
    const [info, setInfo] = useState({
        title: '',
        description: ''
    })

    const path = useNavigate()
    const localToken = localStorage.getItem('token')
    if (!localToken) {
        path('/register')
    }

    // onchange event for new and update data
    const GetData = (e) => {
        const { name, value } = e.target
        setInfo(pre => ({
            ...pre,
            [name]: value
        }))
    }

    console.log(info);
    // api for post data to node
    const toServer = async () => {
        if (info.title.trim() === "" || info.description.trim() === "") {
            return;
        }
        try {
            await axios.post('http://localhost:5000/user', info)
        }
        catch (error) {
            console.log(error)
        }
        setInfo({
            title: '',
            description: ''
        })
    }



    return (
        <>
            <div className="textform">
                <div className="container">
                    <h1>Title & Description</h1>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <TextField label="Title" value={info.title} name='title' variant="standard" className='input-Size' color='success' onChange={GetData} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Description" value={info.description} name='description' variant="standard" className='input-Size' color='success' onChange={GetData} />
                        </Grid>
                        <Grid item xs={12}>
                            <div className="btngrp">
                                <button onClick={() => path('/dashboard')}>See Notes</button>
                                <button onClick={toServer}>Done</button>
                            </div>
                        </Grid>
                    </Grid>
                </div >
            </div>
        </>
    );
}

export default TextForm;

