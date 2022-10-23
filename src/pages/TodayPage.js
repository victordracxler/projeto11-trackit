import dayjs from "dayjs";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "dayjs/locale/pt-br";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/User";
import axios from "axios";
import HabitCard from "../components/HabitCard";

export default function TodayPage() {
  const { user, refresh} = useContext(UserContext);
  const [todayHabits, setTodayHabits] = useState([])

  const today = dayjs().locale("pt-br").format("dddd, DD/MM");
  const maiusc = today[0].toUpperCase() + today.substring(1);

  useEffect(() => {
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const promise = axios
      .get(url, { headers: { Authorization:`Bearer ${user.token}` } })
      .then((response) => {
       setTodayHabits(response.data)
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [refresh]);
  
  function Counter(){
    let total = 0
    let doneHabits = 0

    todayHabits.forEach((habit)=> {
      total++
      habit.done && doneHabits++
    
    })
    const percent = Math.round((doneHabits/total)*100)

    if(percent === 0){
      return(
        <p>Nenhum hábito concluído ainda</p>
      )
    } else{
      return(
        <p className="green">{percent}% dos hábitos concluídos</p>
      )
    }
  }

  return (
    <>
      <Header />
      <TodayWrapper>
        <TitleContainer>
          <h1>{maiusc}</h1>
          <Counter/>
        </TitleContainer>

        <HabitsList>

          {todayHabits.map(HabitCard)}
        </HabitsList>
      </TodayWrapper>
      <Footer />
    </>
  );
}

const TodayWrapper = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 98px 17px 110px 17px;
  font-family: "Lexend Deca", sans-serif;
`;

const HabitsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top:28px;
`
const TitleContainer = styled.div`
  width: 340px;

  h1{
    color: #126BA5;
    font-size: 23px;
  }

  p{
    color: #BABABA;
    font-size: 18px;
    line-height: 22px;
  }
  .green{
    color: #8FC549;
  }
`