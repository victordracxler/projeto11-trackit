import styled from "styled-components";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function HabitCard(habit) {
  const { id, name, done, currentSequence, highestSequence } = habit;
  const isHighest = currentSequence === highestSequence;
  

  return (
    <Card key={id} done={done} isHighest={isHighest}>
      <h1>{name}</h1>
      <p>
        Sequência atual: <span className="current">{currentSequence} dias</span>
      </p>
      <p>
        Seu recorde: <span className="highest">{highestSequence} dias</span>
      </p>

      <IconContainer>
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
