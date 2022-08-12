import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import GetListBerita from './container/about/get-list';
import Example from './container/index';
import Navbar from './components/navbar/index';

function App() {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Example />} />
                    <Route path="/get-list-berita" element={<GetListBerita />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;