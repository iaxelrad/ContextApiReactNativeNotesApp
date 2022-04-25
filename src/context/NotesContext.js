import React, {createContext} from 'react';

export const NotesContext = createContext();

export const NotesProvider = ({children}) => {
  return <NotesContext.Provider value={12}>{children}</NotesContext.Provider>;
};
