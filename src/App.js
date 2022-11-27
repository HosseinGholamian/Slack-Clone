import React from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom'
import styled from 'styled-components';
import Sidebar from "./Components/Sidebar";

import './App.css';
import Header from './Components/Header';
import Chat from './Components/Chat';


function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <AppBody>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Chat/>} >
              
            </Route>
          </Routes>
        </AppBody>

      </div>
    </Router>
  );
}

export default App;
const AppBody = styled.div`
display: flex;
height: 100vh;

`;