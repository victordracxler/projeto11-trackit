import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../context/User";

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  return (
    <HeaderBar>
      <h1>TrackIt</h1>
      <img data-identifier="avatar" src={user.image} alt="" />
    </HeaderBar>
  );
}

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 10px 18px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  margin-bottom: 98px;

  h1 {
    font-family: 'Playball', cursive;
    color: #ffffff;
    font-size: 39px;
  }

  img{
    width: 51px;
    height:51px;
    border-radius: 98.5px;
  }
`;
