import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import GetListBerita from './container/about/get-list';
import Example from './container/index';
import Navbar from './components/navbar/index';
import ReadArtikel from './container/artikel/read';
import CreateArtikel from './container/artikel/create';
import DeleteArtikel from './container/artikel/delete';
import ReadDetail from './container/artikel/read-detail';

function App() {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Example />} />
                    <Route path="/get-list-berita" element={<GetListBerita />} />
                    <Route path="/read-artikel" element={<ReadArtikel />} />
                    <Route path="/create-artikel" element={<CreateArtikel />} />
                    <Route path="/delete-artikel/:id" element={<DeleteArtikel />} />
                    <Route path="/read-detail-artikel/:id" element={<ReadDetail />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;