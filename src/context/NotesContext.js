import React, {createContext, useReducer} from 'react';
import {initialState, reducer as NotesReducer} from '../reducer/NotesReducer';

export const NotesContext = createContext();

export const NotesProvider = ({children}) => {
  const [state, dispatch] = useReducer(NotesReducer, initialState);
  return (
    <NotesContext.Provider value={{state, dispatch}}>
      {children}
    </NotesContext.Provider>
  );
};
