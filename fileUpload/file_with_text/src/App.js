import { useEffect, useState } from 'react';
import './App.css';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

function App() {
  const [form, setFormData] = useState({
    title: '',
    description: ''
  })
  const [files, setFiles] = useState()
  // const [newData, setNewData] = useState([])x
  const GetData = (e) => {
    const { name, value } = e.target
    setFormData(pre => ({
      ...pre,
      [name]: value
    }))
  }
  useEffect(() => {
    display();
  }, [])

  const upload = async () => {
    const formData = new FormData()
    formData.append('image', files)
    formData.append('title', form.title)
    formData.append('description', form.description)
    await axios.post('http://localhost:5000/main/post', formData)
    display();
    //   const result = await axios.get('http://localhost:5000/user')
    //   setNewData(result.data)
    //   console.log(form);
    // }
    // console.log(newData);
    // console.log(form);
  }
  const [data, setData] = useState([])
  const display = async () => {
    const response = await axios.get("http://localhost:5000/main/get");
    setData(response.data);
    console.log(data);
  }
  return (
    <div className="App">
      <div className="container">
        <form>
          <h2>Form With Image</h2>
          <TextField label="Title" className='inputs' name='title' onChange={GetData} value={form.title} />
          <h1> </h1>
          <TextField label="Description" className='inputs' name='description' onChange={GetData} value={form.description} />
          <h1> </h1>
          <input type="file" placeholder='select file' className='image' onChange={(e) => setFiles(e.target.files[0])} name='image' />
          <h1> </h1>
          <Button variant="contained" onClick={upload}>Upload</Button>
        </form>
      </div>
      {/* {data.map((e) => {

      })} */}
    </div>
  );
}

export default App;
