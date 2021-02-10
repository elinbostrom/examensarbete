import { createContext, useState } from 'react';

export const LessonsCoursesContext = createContext({});

export default function LessonCoursesProvider({ children }) {
  const [activePage, setActivePage] = useState("Börja rida");

  return (
    <LessonsCoursesContext.Provider value={{
      setActivePage,
      activePage
    }}>
      {children}
    </LessonsCoursesContext.Provider>
  )
}
