import AboutUsLayout from '@/components/Layouts/AboutUsLayout'
import Wrapper from '@/components/Wrapper'
import { LessonsCoursesContext } from '@/contexts/LessonCoursesProvider'
import React, { useContext, useEffect, useState } from 'react'
import styles from '@/styles/AboutUs.module.scss'
import EmployeeCard from '@/components/EmployeeCard'

// get data
import client from '@/apollo/client'
import { EMPLOYEES } from '@/queries/employees';

export default function Employees({ employees, heroes }) {
  const { setActivePage } = useContext(LessonsCoursesContext);

  useEffect(() => {
    setActivePage("Personal")
  }, [])

  return (
    <AboutUsLayout heroes={heroes} page="aboutus">
      <Wrapper>
        <h2 className={styles.headline}>Vår personal</h2>
        <p className={styles.paragraph}>Lär känna oss som jobbar på ridskolan lite bättre :)</p>
        <section className={styles.personal}>
          {Array.isArray(employees) && employees.map(employee => {
            return (
              <EmployeeCard key={employee.id} employee={employee.info} />
            )
          })}
        </section>
      </Wrapper>
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