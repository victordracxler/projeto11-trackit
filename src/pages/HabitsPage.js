import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LISTARHABITOS } from "../components/mock";
import UserContext from "../context/User";
import { BsPlusSquareFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function HabitsPage() {
  const { user, setUser } = useContext(UserContext);
  const [myHabits, setMyHabits] = useState([]);
  const weekDay = [0, 1, 2, 3, 4, 5, 6];
  const weekInitials = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [selectedDays, setSelectedDays] = useState([]);

  useEffect(() => {
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const promise = axios
      .get(url, { headers: { Authorization: `Bearer ${user.token}` } })
      .then((response) => {
        console.log(response.data);
        setMyHabits(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  function RenderWeekDays(weekDayNum) {
    const isSelected = selectedDays.includes(weekDayNum);

    return (
      <WeekdayBox onClick={() => clickDay(weekDayNum)} isSelected={isSelected}>
        {weekInitials[weekDayNum]}
      </WeekdayBox>
    );
  }

  function clickDay(weekDayNum) {
    if (selectedDays.includes(weekDayNum)) {
      const index = selectedDays.indexOf(weekDayNum);
      const arr = [...selectedDays];
      arr.splice(index, 1);
      setSelectedDays(arr);
    } else {
      const arr = [...selectedDays, weekDayNum];
      setSelectedDays(arr);
    }
  }

  return (
    <>
      <Header />
      <HabitsWrapper>
        <TitleContainer>
          <h1>Meus hábitos</h1>

          <IconContext.Provider
            value={{
              color: "#52B6FF",
              size: "35px",
            }}
          >
            <BsPlusSquareFill />
          </IconContext.Provider>
        </TitleContainer>

        <CreateHabit>
          <NameInput type="text" placeholder="nome do hábito" />

          <WeekWrapper>{weekDay.map(RenderWeekDays)}</WeekWrapper>

          <BttnWrapper>
            <button>Cancelar</button>
            <button>Salvar</button>
          </BttnWrapper>
        </CreateHabit>
      </HabitsWrapper>
      <Footer />
    </>
  );
}

const HabitsWrapper = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 98px 17px;
  font-family: "Lexend Deca", sans-serif;
`;

const TitleContainer = styled.div`
  width: 340px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h1 {
    color: #126ba5;
    font-size: 23px;
  }
`;

const CreateHabit = styled.div`
  width: 340px;
  height: 180px;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 18px 18px 15px 18px;
`;

const NameInput = styled.input`
  width: 303px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  color: #666666;
  font-family: "Lexend Deca", sans-serif;
  padding: 11px;
  margin-bottom: 10px;
`;

const BttnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

const WeekdayBox = styled.div`
  width: 30px;
  height: 30px;
  font-size: 20px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  color: ${(props) => (props.isSelected ? "#ffffff" : "#CFCFCF")};
  background-color: ${(props) => (!props.isSelected ? "#ffffff" : "#CFCFCF")};
`;

const WeekWrapper = styled.div`
  display: flex;
  margin-bottom: 29px;
`;
