import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../context/User";
import logo from "../imgs/Group8.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const userStorage = localStorage.getItem("user");
  if (userStorage){
    navigate('/hoje')
  }


  function handleLogin(e) {
    e.preventDefault();

    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    
      const body = {
      email: email,
      password: password,
    };

    const promise = axios.post(url, body)
    .then(res => {
        const newObj =  {
            id: res.data.id,
            name: res.data.name,
            image: res.data.image,
            email: res.data.email,
            token: res.data.token,
        }
        setUser(newObj)
        localStorage.setItem("user", JSON.stringify(newObj));
        navigate('/hoje')

    })
    .catch(err => {
        alert(err.response.data.message)
    })
    
  }

  return (
    <LoginWrapper>
      <LogoImg src={logo} alt="logo TrackIt" />

      <LoginForm onSubmit={handleLogin}>
        <LoginInput
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <LoginInput
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
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
`;

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

export {
  LogoImg,
  LoginBttn,
  LoginForm,
  LoginInput,
  LoginWrapper,
  LinkToSignUp,
};
