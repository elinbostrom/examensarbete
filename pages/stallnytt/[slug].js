import styles from '@/styles/Stablenews.module.scss';
import { useRouter } from 'next/router';

// Components
import Layout from '@/components/Layouts';
import LoadingStableNews from 'pages/loading';
import { IoIosLink } from "react-icons/io";
import NewsGallery from '@/components/NewsArticle/NewsGallery';

// Utils
import { createMarkup } from '@/utils/createMarkup';

// Get data
import { POST } from '../../queries/post';
import { useQuery } from '@apollo/client'


export default function StablenewsPost() {
  const router = useRouter();
  const slug = router.query.slug;
  const { data, loading, error } = useQuery(POST(slug));

  if (loading) return <LoadingStableNews />;
  if (error) return <h1>ERROR</h1>;
  if (!data) return <h1>Not found</h1>;

  const stablenewsInfo = data.stablenew ? { ...data.stablenew.posts } : null;
  const { post, stablenew } = data;
  const date = post ? post?.date.replace("T", " | ") : stablenew?.date.replace("T", " | ");

  const heroInfo = {
    title: post?.title ?? stablenewsInfo.title,
    slogan: <button className={styles.navigation_btn} onClick={() => window.history.back()}>Gå tillbaka</button>,
  };

  return (
    <Layout data={heroInfo} page="stablenews">
      <section className={styles.section}>
        {post ? (
          <article className={styles.post}>
            <h2>{post?.title}</h2>
            <p>{date}</p>
            <div dangerouslySetInnerHTML={createMarkup(post?.content)} />
          </article>
        ) : (
          <article className={styles.post_stablenews}>
            <section>
              <h2>{stablenewsInfo.title}</h2>
              <p>{date}</p>
              <p>{stablenewsInfo.information}</p>
              {stablenewsInfo.link && <a href={stablenewsInfo.link}><IoIosLink />{stablenewsInfo.btntext}</a>}
            </section>
            {stablenewsInfo.pictures?.picture1 && <NewsGallery pictures={stablenewsInfo.pictures} />}
          </article>
        )}
      </section>
    </Layout>
  )
}