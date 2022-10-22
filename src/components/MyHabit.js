import styled from "styled-components";
import { WeekdayBox, WeekWrapper } from "./CreateHabitBox";
import { BsTrash } from "react-icons/bs";
import { IconContext } from "react-icons";
import axios from "axios";
import UserContext from "../context/User";
import { useContext } from "react";

export default function MyHabit(habit) {
  const { user, refresh, setRefresh} = useContext(UserContext);
  const { days, id, name } = habit;
  const weekDay = [0, 1, 2, 3, 4, 5, 6];

  function RenderWeekDays(weekDayNum) {
    const weekInitials = ["D", "S", "T", "Q", "Q", "S", "S"];
    const isSelected = days.includes(weekDayNum);

    return (
      <WeekdayBox isSelected={isSelected}>
        {weekInitials[weekDayNum]}
      </WeekdayBox>
    );
  }

  function deleteHabit(habitId) {
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`;

    axios
      .delete(url, { headers: { Authorization: `Bearer ${user.token}` } })
      .then((res) => {
        console.log(res.data);
        setRefresh(!refresh)
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  return (
    <MyHabitCard key={id}>
      <h1>{name}</h1>
      <WeekWrapper>{weekDay.map(RenderWeekDays)}</WeekWrapper>

      <TrashWrapper onClick={() => deleteHabit(id)}>
        <IconContext.Provider
          value={{
            color: "#666666",
            size: "14px",
          }}
        >
          <BsTrash />
        </IconContext.Provider>
      </TrashWrapper>
    </MyHabitCard>
  );
}

const MyHabitCard = styled.div`
  width: 340px;
  height: 91px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 14px;
  margin: 10px 0 0 0;
  position: relative;

  h1 {
    color: #666666;
    margin-bottom: 8px;
    font-size: 20px;
  }
`;

const TrashWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 11px;
`;
