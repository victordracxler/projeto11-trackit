import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../imgs/Group8.png";

export default function LoginPage() {
  return (
    <LoginWrapper>
      <LogoImg src={logo} alt="logo TrackIt" />

      <LoginForm action="">
        <LoginInput type="email" placeholder="email" />
        <LoginInput type="password" placeholder="senha" />
        <LoginBttn type="submit">Entrar</LoginBttn>
      </LoginForm>

      <Link to={`/cadastro`}>
      <LinkToSignUp>Não tem uma conta? Cadastre-se!</LinkToSignUp>
      </Link>
    </LoginWrapper>
  );
}

const LogoImg = styled.img`
    width: 180px;
    margin: 68px auto 33px auto;
`

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginInput = styled.input`
  font-family: "Lexend Deca", sans-serif;
  font-size: 20px;
  color: #dbdbdb;
  padding-left: 11px;
  width: 303px;
  height: 45px;
  margin-bottom: 6px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;

const LoginBttn = styled.button`
  font-family: "Lexend Deca", sans-serif;
  font-size: 20px;
  color: #ffffff;
  width: 303px;
  height: 45px;
  background: #52b6ff;
  border-radius: 5px;
  border: none;
  margin-bottom: 25px;
`;

const LinkToSignUp = styled.p`
  font-family: "Lexend Deca", sans-serif;
  color: #52b6ff;
  font-size: 14px;
  text-align: center;
  text-decoration-line: underline;
`;

export {LogoImg, LoginBttn, LoginForm, LoginInput, LoginWrapper, LinkToSignUp}
