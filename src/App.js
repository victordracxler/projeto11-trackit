import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { UserProvider } from "./context/User";
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";


export default function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/cadastro" element={<SignUpPage/>} />
        <Route path="/hoje" element={<TodayPage />} />
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}
