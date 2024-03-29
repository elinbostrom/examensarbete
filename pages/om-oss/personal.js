import React, { useContext, useEffect } from 'react'
import { LessonsCoursesContext } from '@/contexts/LessonCoursesProvider'
import styles from '@/styles/AboutUs.module.scss'

// Components
import EmployeeCard from '@/components/EmployeeCard'
import AboutUsLayout from '@/components/Layouts/AboutUsLayout'

// get data
import client from '@/apollo/client'
import { EMPLOYEES } from '@/queries/employees';
import ButtonNavigate from '@/components/Buttons/ButtonNavigate'

export default function Employees({ employees, heroes }) {
  const { activePage, setActivePage } = useContext(LessonsCoursesContext);

  useEffect(() => {
    setActivePage("Personal")
  }, [])

  return (
    <AboutUsLayout heroes={heroes} page="aboutus" activePage={activePage}>
      <main className={styles.main}>
        <div className={styles.text}>
          <h2 className={styles.headline}>Vår personal</h2>
          <p className={styles.paragraph}>Lär känna oss som jobbar på ridskolan lite bättre :)</p>
          <ButtonNavigate navigate="/karriar" text="Lediga tjänster" />
        </div>
        <section className={styles.personal}>
          {Array.isArray(employees) && employees.map(employee => (
            <EmployeeCard key={employee.id} employee={employee.info} />
          ))}
        </section>
      </main>
    </AboutUsLayout>
  )
}

export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: EMPLOYEES
  });

  return {
    props: {
      employees: data?.employees?.nodes,
      heroes: data?.heroes?.nodes
    },
  }
}