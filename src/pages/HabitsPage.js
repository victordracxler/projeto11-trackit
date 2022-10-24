import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UserContext from "../context/User";
import { BsPlusSquareFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import CreateHabitBox from "../components/CreateHabitBox";
import MyHabit from "../components/MyHabit";

export default function HabitsPage() {
  const { user, refresh} = useContext(UserContext);
  const [myHabits, setMyHabits] = useState([]);
  const [clickCreateHabit, setClickCreateHabit] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [habitName, setHabitName] = useState("");

  useEffect(() => {
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const promise = axios
      .get(url, { headers: { Authorization: `Bearer ${user.token}` } })
      .then((response) => {
        setMyHabits(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [refresh]);

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
            <BsPlusSquareFill onClick={() => setClickCreateHabit(true)} />
          </IconContext.Provider>
        </TitleContainer>

        {clickCreateHabit && (
          <CreateHabitBox
            setClickCreateHabit={setClickCreateHabit}
            habitName={habitName}
            setHabitName={setHabitName}
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
          />
        )}

        {myHabits.map(MyHabit)}

        {myHabits.length === 0 && (
          <NoHabitsMessage>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </NoHabitsMessage>
        )}
      </HabitsWrapper>
      <Footer />
    </>
  );
}

const HabitsWrapper = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 98px 17px 110px 17px;
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

const NoHabitsMessage = styled.p`
  width: 338px;
  font-size: 18px;
  color: #666666;
  margin-top: 29px;
  line-height: 22px;
`;

export {HabitsWrapper, TitleContainer, NoHabitsMessage}