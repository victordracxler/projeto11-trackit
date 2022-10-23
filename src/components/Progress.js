import { useContext } from "react";
import UserContext from "../context/User";

export default function Progress() {
  const {
    user,
    refresh,
    todayPercent,
    setTodayPercent,
    todayHabits,
    setTodayHabits,
  } = useContext(UserContext);

  let total = 0;
  let doneHabits = 0;

  todayHabits.forEach((habit) => {
    total++;
    habit.done && doneHabits++;
  });
  const percent = Math.round((doneHabits / total) * 100);
  setTodayPercent(percent);

  if (todayPercent === 0 || todayPercent == NaN) {
    return <p>Nenhum hábito concluído ainda</p>;
  } else {
    return <p className="green">{todayPercent}% dos hábitos concluídos</p>;
  }
}
