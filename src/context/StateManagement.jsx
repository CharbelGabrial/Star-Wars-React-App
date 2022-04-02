import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, intialVal, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, intialVal)}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);