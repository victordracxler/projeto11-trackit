import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../imgs/Group8.png";
import {LogoImg, LoginBttn, LoginForm, LoginInput, LoginWrapper, LinkToSignUp} from "./LoginPage";


export default function SignUpPage() {
    
    return(
        <LoginWrapper>
      <LogoImg src={logo} alt="logo TrackIt" />

      <LoginForm action="">
        <LoginInput type="email" placeholder="email" />
        <LoginInput type="password" placeholder="senha" />
        <LoginInput type="text" placeholder="nome" />
        <LoginInput type="url" placeholder="foto" />
        <LoginBttn type="submit">Entrar</LoginBttn>
      </LoginForm>

      <Link to={`/`}>
      <LinkToSignUp>Já tem uma conta? Faça login!</LinkToSignUp>
      </Link>
    </LoginWrapper>
    )
    
};
