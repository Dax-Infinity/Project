import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Beyond from './components/Beyond/Beyond';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ownership from './components/Ownership/Ownership';
import Model from './components/Models/Model';
import Motersport from './components/Motorsport/Motersport';
import Error from './components/Error/Error';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/beyond" element={<Beyond />}></Route>
          <Route path="/ownership" element={<Ownership />}></Route>
          <Route path="/models" element={<Model />}></Route>
          <Route path="/motorsport" element={<Motersport />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
