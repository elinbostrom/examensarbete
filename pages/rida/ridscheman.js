import { LessonsCoursesContext } from "@/contexts/LessonCoursesProvider";
import React, { useContext, useEffect } from "react";
import styles from "@/styles/AboutUs.module.scss";

// Components
import LessonCoursesLayout from "@/components/Layouts/LessonsCoursesLayout";

// Get data
import client from "@/apollo/client";
import { RIDING_SCHEMAS } from "@/queries/ridingschemes";

export default function RidingSchemas({ ridscheman, heroes }) {
  const { activePage, setActivePage } = useContext(LessonsCoursesContext);
  const title = "Ridscheman är just nu inte tillgängliga";

  useEffect(() => {
    setActivePage("Ridscheman");
  }, []);

  return (
    <LessonCoursesLayout
      heroes={heroes}
      page="lessoncourses"
      activePage={activePage}
    >
      <section className={styles.taxiskjuts}>
        <h2 className={styles.headline}>{title}</h2>
      </section>
    </LessonCoursesLayout>
  );
}

export async function getStaticProps(context) {
  const { data, loading, networkStatus } = await client.query({
    query: RIDING_SCHEMAS,
  });

  return {
    props: {
      ridscheman: data?.ridscheman?.nodes,
      heroes: data?.heroes?.nodes,
    },
  };
}
