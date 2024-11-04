import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Signup from './pages/singup';

function App() {
    return (
            <Router>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={< Signup/>} />
                    <Route path="/area-membros" element={<Login />} />
                </Routes>
            </Router>
    );
}

export default App;
