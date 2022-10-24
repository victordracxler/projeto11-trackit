import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import UserContext from "../context/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateHabitBox(props) {
  const { user, refresh, setRefresh } = useContext(UserContext);
  const weekDay = [0, 1, 2, 3, 4, 5, 6];
  const weekInitials = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { setClickCreateHabit, selectedDays, setSelectedDays, habitName, setHabitName} = props;
  const [isLoading, setIsLoading] = useState(false);

  function RenderWeekDays(weekDayNum) {
    const isSelected = selectedDays.includes(weekDayNum);

    return (
      <WeekdayBox
        onClick={() => clickDay(weekDayNum)}
        disabled={isLoading}
        isSelected={isSelected}
      >
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
      return "Salvar";
    }
  }

  function saveHabit() {
    setIsLoading(true);

    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const body = {
      name: habitName,
      days: selectedDays,
    };

    axios
      .post(url, body, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        toast("Hábito criado com sucesso!")
        setClickCreateHabit(false);
        setHabitName("");
        setSelectedDays([]);
        setRefresh(!refresh);
        setIsLoading(false)
        toast("Hábito criado com sucesso!")
      })
      .catch((err) => {
        toast(err.response.data.message);
        setIsLoading(false)
      });
  }

  return (
    <CreateHabit>
      <NameInput
        type="text"
        placeholder="nome do hábito"
        disabled={isLoading}
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        maxLength="25"
      />

      <WeekWrapper>{weekDay.map(RenderWeekDays)}</WeekWrapper>

      <BttnWrapper>
        <CreateBttn
          color={"#52B6FF"}
          bgColor={"#ffffff"}
          onClick={() => {
            setClickCreateHabit(false);
            // setHabitName("");
            // setSelectedDays([]);
          }}
        >
          Cancelar
        </CreateBttn>
        <CreateBttn
          color={"#ffffff"}
          bgColor={"#52B6FF"}
          disabled={isLoading}
          onClick={() => {
            saveHabit();
          }}
        >
          <LoadingRequest />
        </CreateBttn>
      </BttnWrapper>

      <ToastContainer />
    </CreateHabit>
  );
}

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

const CreateBttn = styled.button`
  border: none;
  border-radius: 5px;
  width: 84px;
  height: 35px;
  margin-left: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-size: 16px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
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

export { WeekdayBox, WeekWrapper };
