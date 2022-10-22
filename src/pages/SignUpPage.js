import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../imgs/Group8.png";
import {
  LogoImg,
  LoginBttn,
  LoginForm,
  LoginInput,
  LoginWrapper,
  LinkToSignUp,
} from "./LoginPage";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();

    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    
      const body = {
      email: email,
      name: name,
      image: image,
      password: password,
    };

    const promise = axios.post(url, body)
    .then(res => {
        alert('cadastrado com sucesso')
        navigate('/')
        
    })
    .catch(err => {
        console.log(err);
        alert(err.response.data.message)
    })
  }

  return (
    <LoginWrapper>
      <LogoImg src={logo} alt="logo TrackIt" />

      <LoginForm onSubmit={handleSignUp}>
        <LoginInput
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <LoginInput type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />
        <LoginInput type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required />
        <LoginInput type="url"
          placeholder="foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required />
        <LoginBttn type="submit">Cadastrar</LoginBttn>
      </LoginForm>

      <Link to={`/`}>
        <LinkToSignUp>Já tem uma conta? Faça login!</LinkToSignUp>
      </Link>
    </LoginWrapper>
  );
}
