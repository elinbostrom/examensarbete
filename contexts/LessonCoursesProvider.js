import { createContext, useState } from 'react';

export const LessonsCoursesContext = createContext({});

export default function LessonCoursesProvider({ children }) {
  const [activePage, setActivePage] = useState("");
  const [placesLeft, setPlacesLeft] = useState(null)

  return (
    <LessonsCoursesContext.Provider value={{
      setActivePage,
      activePage,
      placesLeft,
      setPlacesLeft
    }}>
      {children}
    </LessonsCoursesContext.Provider>
  )
}
