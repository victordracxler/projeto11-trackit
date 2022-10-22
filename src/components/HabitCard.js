import styled from "styled-components";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import axios from "axios";
import UserContext from "../context/User";
import { useContext } from "react";

export default function HabitCard(habit) {
  const { user, refresh, setRefresh } = useContext(UserContext);
  const { id, name, done, currentSequence, highestSequence } = habit;
  const isHighest = currentSequence === highestSequence;

  function handleClick(clickedId, isDone) {
    const baseUrl =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/";

    const check = "/check/"
    const uncheck = "/uncheck/"

    console.log("teste", baseUrl+clickedId+uncheck);
    if(isDone){
      axios
      .post(baseUrl+clickedId+uncheck, clickedId,{ headers: { Authorization:`Bearer ${user.token}` } })
      .then((res) => console.log("desmarcou"))
      .catch((err) => console.log(err.response))
      setRefresh(!refresh)
    } else{
      axios
      .post(baseUrl+clickedId+check, clickedId, { headers: { Authorization:`Bearer ${user.token}` } })
      .then((res) => console.log("marcou"))
      .catch((err) => console.log(err.response))
      setRefresh(!refresh)
    }
  }

  return (
    <Card key={id} done={done} isHighest={isHighest}>
      <h1>{name}</h1>
      <p>
        Sequência atual: <span className="current">{currentSequence} dias</span>
      </p>
      <p>
        Seu recorde: <span className="highest">{highestSequence} dias</span>
      </p>

      <IconContainer onClick={() => handleClick(id, done)}>
        <IconContext.Provider
          value={{
            color: done ? "#8FC549" : "#E7E7E7",
            size: "69px",
          }}
        >
          <BsFillCheckSquareFill />
        </IconContext.Provider>
      </IconContainer>
    </Card>
  );
}

const Card = styled.li`
  width: 340px;
  height: 94px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
  padding: 13px;

  h1 {
    font-size: 20px;
    color: #666666;
    margin-bottom: 7px;
  }

  p {
    font-size: 13px;
    color: #666666;
  }

  .current {
    color: ${(props) => (props.done ? "#8FC549" : "#666666")};
  }

  .highest {
    color: ${(props) =>
      props.done && props.isHighest ? "#8FC549" : "#666666"};
  }
`;

const IconContainer = styled.div`
  position: absolute;
  right: 13px;
  top: 13px;
`;
