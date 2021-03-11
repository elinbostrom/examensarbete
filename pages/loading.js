import styles from '@/styles/Stablenews.module.scss';

// Components
import Layout from '@/components/Layouts';

export default function LoadingStableNews() {
  const data = {
    title: 'Stallnytt',
    slogan: 'Sidan laddar...'
  }

  return (
    <Layout data={data} page="stablenews">
      <section className={styles.section}>
        <h2 style={{ paddingTop: '3rem', color: 'white', textShadow: '0 1px 1px black' }}>Sidan laddar...</h2>
      </section>
    </Layout>
  )
}