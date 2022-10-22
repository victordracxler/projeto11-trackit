import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const [refresh, setRefresh] = useState(true)

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser({});
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, refresh, setRefresh }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;

export { UserProvider };