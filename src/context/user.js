import {
  createContext,
  useState,
  useContext,
  useEffect
} from "react";
import { getUserByUsername } from '../api';

const defaultUser = {
  user: {
    avatar: "https://pbs.twimg.com/media/BI97ZrOCAAEmd0c.jpg",
    level: 0,
    username: "ninjabrian",
    name: "Brian"
  },
  setUser: null
}

const UserContext = createContext(defaultUser);
const UpdateUserContext = createContext();

export function GetUser() {
  return useContext(UserContext);
}

export function UpdateUser() {
  return useContext(UpdateUserContext);
}

export default function UserProvider({ children }) {
  const [username, setUsername] = useState(window.localStorage.getItem('currentUser') || 'ninjabrian');
  const [loggedInUser, setLoggedInUser] = useState({ user: defaultUser.user, setUser: setUsername });

  useEffect(() => {
    getUserByUsername(username)
      .then((user) => {
        setLoggedInUser({ user: user, setUser: setUsername });
        window.localStorage.setItem('currentUser', username);
      })
      .catch((err) => {
        setLoggedInUser({ user: {}, setUser: setUsername });
        window.localStorage.setItem('currentUser', '');
        console.log(err);
      });
    return;
  }, [username])

  return (
    <UserContext.Provider value={loggedInUser}>
      <UpdateUserContext.Provider value={setUsername}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  )
};
