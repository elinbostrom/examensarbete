// Components
import LessonCoursesLayout from '@/components/Layouts/LessonsCoursesLayout'
import TextInformationSection from '@/components/TextInformationSection';
import ArticleSection from '@/components/ArticleSection/index.jsx';
import CourseCard from '@/components/CourseCard';

// Styling
import styles from '@/styles/CourseDetailpage.module.scss'

// get data
import client from '@/apollo/client'
import { INFORMATION_PRISER } from '@/queries/information-priser';
import PriceList from '@/components/PriceList';


export default function InformationPrices({ heroes, pricepages, informations }) {

  return (
    <LessonCoursesLayout heroes={heroes} page="lessoncourses">
      <PriceList data={pricepages} category="Senior" />
      <PriceList data={pricepages} category="Junior" />
      <PriceList data={pricepages} category="Hästlekis" />
    </LessonCoursesLayout>
  )
}


export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: INFORMATION_PRISER
  });

  return {
    props: {
      heroes: data?.heroes?.nodes,
      pricepages: data?.pricepages?.nodes,
      informations: data?.informations?.nodes
    },
  }
}