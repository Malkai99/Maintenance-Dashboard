import React, { createContext, useContext, useState } from 'react';
import { format } from 'date-fns';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [shift, setShift] = useState(null);
  const [cell, setCell] = useState(null);
  const [date, setDate] = useState(format(new Date(), "MM/dd/yyyy"));

  const state = {
    shift,
    cell,
    date,
    setShift,
    setCell,
    setDate,
  };

  return (
    <GlobalStateContext.Provider value={state}>
      { children }
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState debe usarse dentro de un GlobalStateProvider');
  }
  return context;
};
