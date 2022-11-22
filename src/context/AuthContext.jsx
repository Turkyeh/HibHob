import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Yasmen Yousef",
      profilePic:
        "https://i.pinimg.com/236x/3d/53/90/3d5390d2a46a17d6fbe833e7a0bfe47d.jpg",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};


// import { createContext, useState } from "react";

// export const AuthContext = createContext()

// export default function AuthContextProvider({ children }) {
    
//     let user;
//     if (localStorage.getItem('currentUser'))
//         user = JSON.parse(localStorage.getItem('currentUser'));
//     let isLoggedIn = (user) ? true : false;

//     const [auth, setAuth] = useState(isLoggedIn)
//   return (
//         <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
//     );
// }