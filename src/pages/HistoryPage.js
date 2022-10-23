import Footer from "../components/Footer";
import Header from "../components/Header";
import { HabitsWrapper, TitleContainer, NoHabitsMessage } from "./HabitsPage";

export default function HistoryPage() {
  return (
    <>
      <Header />
      <HabitsWrapper>
        <TitleContainer>
          <h1>Histórico</h1>
        </TitleContainer>

        <NoHabitsMessage>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </NoHabitsMessage>
      </HabitsWrapper>

      <Footer />
    </>
  );
}
