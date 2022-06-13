import React, { useState } from 'react';
import * as ReactDomClient from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from "react";
import { run as runHolder } from 'holderjs';

import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import WebGL from "./pages/WebGL";
import Login from './pages/Login';

import reportWebVitals from './reportWebVitals';

export default function App() {
    const [token, setToken] = useState(true);

    useEffect(() => {
        runHolder('placeholder-img');
    });

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/WebGL" element={<WebGL />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const container = document.getElementById('root');
const root = ReactDomClient.createRoot(container);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
