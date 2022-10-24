import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [todayPercent, setTodayPercent] = useState(0);
  const [todayContext, setTodayContext] = useState([]);

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser({});
    }
  }, []);

  useEffect(() => {
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const promise = axios
      .get(url, { headers: { Authorization: `Bearer ${user.token}` } })
      .then((response) => {
        setTodayContext(response.data);
        let total = 0;
        let doneHabits = 0;

        response.data.forEach((habit) => {
          total++;
          habit.done && doneHabits++;
        });
        const percent = Math.round((doneHabits / total) * 100);
        setTodayPercent(percent);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    
  }, [refresh]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        refresh,
        setRefresh,
        todayPercent,
        setTodayPercent,todayContext, setTodayContext
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;

export { UserProvider };
