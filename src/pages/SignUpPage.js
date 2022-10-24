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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function handleSignUp(e) {
    e.preventDefault();
    setIsLoading(true);

    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    const body = {
      email: email,
      name: name,
      image: image,
      password: password,
    };

    const promise = axios
      .post(url, body)
      .then((res) => {
        toast("cadastrado com sucesso");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast(err.response.data.message);
        setIsLoading(false);
      });
  }

  function LoadingRequest() {
    if (isLoading) {
      return (
        <ThreeDots
          height="45"
          width="45"
          radius="15"
          color="#ffffff"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      );
    } else {
      return "Cadastrar";
    }
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
          disabled={isLoading}
        />
        <LoginInput
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
        />
        <LoginInput
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={isLoading}
        />
        <LoginInput
          type="url"
          placeholder="foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          disabled={isLoading}
        />
        <LoginBttn type="submit" disabled={isLoading}>
          <LoadingRequest />
        </LoginBttn>
      </LoginForm>
      <ToastContainer />

      <Link to={`/`}>
        <LinkToSignUp>Já tem uma conta? Faça login!</LinkToSignUp>
      </Link>
    </LoginWrapper>
  );
}
