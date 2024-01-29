import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login';
import DashBoard from './components/Dashboard';
export default function Login() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/dashboard' element={<DashBoard />}/>
          <Route path='*' element={<h2>404 Error</h2>} />
          </Routes>
      </BrowserRouter>
      </>
  )
}

// import React, { useRef, useEffect } from 'react';

// const ExampleComponent = () => {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     // Focus the input element when the component mounts
//     inputRef.current.focus();
//   }, []);

//   const handleButtonClick = () => {
//     // Access the current value of the input element
//     console.log(inputRef.current.value);
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleButtonClick}>Log Value</button>
//     </div>
//   );
// };

// export default ExampleComponent;
