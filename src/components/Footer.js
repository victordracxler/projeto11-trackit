import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../context/User";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
  const { todayPercent, setTodayPercent } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <FooterBar>
      <div onClick={() => navigate("/habitos")}>Habitos</div>
      <div className="center"></div>
      <div className="today-bttn" onClick={() => navigate("/hoje")}>
      <CircularProgressbar
        value={todayPercent}
        text="Hoje"
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#52b6ff",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}
      />
      </div>
      <div onClick={() => navigate("/historico")}>Histórico</div>
    </FooterBar>
  );
}

const FooterBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  margin-top: 110px;

  display: flex;
  flex-direction: row;
  height: 70px;
  width: 100%;
  background-color: aquamarine;
  font-family: "Lexend Deca", sans-serif;
  align-items: flex-end;

  div {
    width: calc(50% - (91px / 2));
    height: 70px;
    background-color: #ffffff;
    color: #52b6ff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .center {
    width: 91px;
    height: 70px;
    background-color: #ffffff;
  }

  .today-bttn {
    position: absolute;
    bottom: 0;
    left: calc(50% - (91px / 2));
    width: 91px;
    height: 91px;

    background-color: #52b6ff;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-bottom: 10px;
    border-radius: 50%;
    z-index: 3;
  }
`;
