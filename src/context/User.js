import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [todayPercent, setTodayPercent] = useState(0);

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser({});
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        refresh,
        setRefresh,
        todayPercent,
        setTodayPercent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;

export { UserProvider };
