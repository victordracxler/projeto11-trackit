import dayjs from "dayjs";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "dayjs/locale/pt-br";
// import * as dayjs from 'dayjs'

export default function TodayPage() {
  console.log(dayjs().locale("pt-br").format("dddd, DD/MM"));
  const today = dayjs().locale("pt-br").format("dddd, DD/MM");
  const maiusc = today[0].toUpperCase() + today.substring(1);

  return (
    <>
      <Header />
      <TodayWrapper>
        <div>
          <h1>{maiusc}</h1>
          <p>Nenhum hábito concluído ainda</p>
        </div>
        
      </TodayWrapper>
      <Footer />
    </>
  );
}

const TodayWrapper = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 98px 17px;
`;
