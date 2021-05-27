import { createContext, useState } from 'react';

export const GlobalContext = createContext({});

export default function GlobalContextProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <GlobalContext.Provider value={{
      showMenu,
      setShowMenu
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
