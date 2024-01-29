import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function TextForm() {
    const [show, setShow] = useState(false);
    const [allData, setAllData] = useState([])
    const [id, setId] = useState(0)
    const [info, setInfo] = useState({
        title: '',
        description: ''
    })
    const path = useNavigate();
    if (!localStorage.getItem('token')) {
        path('/login')
    }

    // close handler for model
    const handleClose = () => {
        setShow(false);
        setInfo({
            title: '',
            description: ''
        })
    }


    // onchange event for new and update data
    const GetData = (e) => {
        const { name, value } = e.target
        setInfo(pre => ({
            ...pre,
            [name]: value
        }))
    }


    // function for get api
    const display = async () => {
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: token,
        };
        const result = await axios.get('http://localhost:5000/user', { headers })
        console.log("token---->", token);
        // const dataHandle = await axios.get("http://localhost:5000/user", { headers });
        // console.log(dataHandle.headers);
        setAllData(result.data)
    }


    useEffect(() => {
        display();
    }, [])// when add new data or update old data


    // model show functiion
    const handleShow = (index) => {
        setInfo({
            title: allData[index].title,
            description: allData[index].description
        })
        setId(index) // for index of card
        setShow(true)
    }


    // api for delete data from node
    const deleteData = async (index) => {
        console.log(allData[index]._id);
        await axios.delete(`http://localhost:5000/user/${allData[index]._id}`);
        display();
    }


    // api for update and put data
    const savData = async (index) => {
        if (info.title.trim() === "" || info.description.trim() === "") {
            return;
        }
        setInfo({
            title: '',
            description: ''
        })
        handleClose()
        await axios.put(`http://localhost:5000/user/${allData[id]._id}`, info)
        display();
    }


    return (
        <>
            <div className="textform">

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <button className='create' onClick={() => path('/notes')}>Create Notes</button>
                    </Grid>
                    {allData.map((user, index) => (
                        <>
                            <Grid item xs={4}>
                                <div className="company-card">
                                    <h2 className="company-name">{user.title}</h2>
                                    <p className="type">{user.description}</p>
                                    <button onClick={() => deleteData(index)}>Delete</button>
                                    <button onClick={() => handleShow(index)}>Update</button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Update Data</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Title</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder='New Title'
                                                        autoFocus
                                                        value={info.title} name='title' variant="standard" color='success' onChange={GetData}
                                                    />
                                                    <br />
                                                    <Form.Label>Description</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder='New Description'
                                                        value={info.description} name='description' variant="standard" color='success' onChange={GetData}
                                                    />
                                                </Form.Group>

                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="success" onClick={() => savData(index)}>
                                                Save
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </Grid>
                        </>
                    )
                    )}
                </Grid>
            </div>
        </>
    );
}

export default TextForm;

