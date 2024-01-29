import { useState } from 'react';
import './App.css';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { Delete } from '@mui/icons-material';

function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('myData')) || []);
  const [inputValue, setInputValue] = useState({
    name: '',
    class: ''
  });

  const storeInput = (e) => {
    setInputValue(pre => {
      return {
        ...pre,
        name: e.target.value,
        class: "normal"
      }
    });
  };

  // to local storage
  const toLocal = (e) => {
    if (inputValue.name !== '') {
      const newData = [...data, ...[inputValue]];
      setData(newData)
      localStorage.setItem('myData', JSON.stringify(newData));
      setInputValue(pre => {
        return {
          ...pre,
          name: ""
        }
      })
    }
  };

  return (
    <>
      <center>
        <div classNameName="App">
          <form onSubmit={toLocal}>
            <div className="layout">
              <h1 className="headText">Todo List</h1>
              <div className="listStore">
                <input type="text" className="input" placeholder="enter the text" onChange={storeInput} />

                {data.map((user, index) => (<li className={user.class}>{user.name}

                  <Delete className='deleteIcon' onClick={() => {
                    const updatedData = [...data];
                    updatedData.splice(index, 1);
                    setData(updatedData);
                    localStorage.setItem("myData", JSON.stringify(updatedData));
                  }} />

                  <DoneOutlineIcon className='doneicon' onClick={() => {
                    const updatedData = [...data];
                    updatedData.splice(index, 1, { name: user.name, class: "notactive" });
                    setData(updatedData);
                    localStorage.setItem("myData", JSON.stringify(updatedData));

                  }} />

                </li>))}

              </div>
            </div>
          </form>
        </div>
      </center>
    </>
  );
}

export default App;