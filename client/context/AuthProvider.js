import { createContext, useState,useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
   const [state, setState] = useState({
      user: {},
      token: "",
   });

   // populate state with info that is in local storage
   useEffect(()=>{
      setState(JSON.parse(window.localStorage.getItem("auth")))
   },[])
   return (
      <UserContext.Provider value={[state, setState]}>
         {children}
      </UserContext.Provider>
   );
};
export { UserContext, UserProvider };
