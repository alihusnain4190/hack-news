import React, { useReducer, useEffect, useContext } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();
const initState = {
  isLoading: true,
  hackNews: {},
  err: "",
};

const AppProvider = ({ children }) => {
  const [news, dispatch] = useReducer(reducer, initState);
  return <AppContext.Provider value={"ali"}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
