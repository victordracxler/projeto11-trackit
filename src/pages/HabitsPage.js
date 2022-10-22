import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LISTARHABITOS } from "../components/mock";


export default function HabitsPage() {
    
    return(
        <>
      <Header />
      <HabitsWrapper>
        <TitleContainer>
          <h1>Meus hábitos</h1>
        </TitleContainer>

        
      </HabitsWrapper>
      <Footer />
    </>
    )
};

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

  h1{
    color: #126BA5;
    font-size: 23px;
  }

`