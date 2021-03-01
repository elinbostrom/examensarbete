import LessonsCoursesLayout from '@/components/Layouts/LessonsCoursesLayout'
import { START_RIDING } from '../../../queries/start-riding'
import client from '../../../apollo/client';
import { MenuItems } from '@/components/Submenu/MenuItems';
import Wrapper from '@/components/Wrapper';
import ButtonNavigate from '@/components/Buttons/ButtonNavigate';

export default function index({ heroes }) {

  return (
    <LessonsCoursesLayout heroes={heroes} page="lessoncourses" activePage="Alla kurser">
      <Wrapper>
        <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Våra kurser</h2>
        <Wrapper courses>
          <h3 style={{ marginTop: '1rem', textAlign: 'center' }}>Häst</h3>
          {MenuItems.map(item => {
            if (item.category === "Häst") {
              return (
                <ButtonNavigate key={item.id} text={item.title} navigate={item.path} />
              )
            }
          })}
        </Wrapper>
        <Wrapper courses>
          <h3 style={{ marginTop: '1rem', textAlign: 'center' }}>Ponny</h3>
          {MenuItems.map(item => {
            if (item.category === "Ponny") {
              return (
                <ButtonNavigate key={item.id} text={item.title} navigate={item.path} />
              )
            }
          })}
        </Wrapper>
      </Wrapper>
    </LessonsCoursesLayout>
  )
}

export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: START_RIDING
  });

  return {
    props: {
      heroes: data?.heroes?.nodes
    },
  }
}