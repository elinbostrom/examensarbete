import '../styles/globals.scss'
import { ApolloProvider } from "@apollo/client"
import client from "../apollo/client"
import LessonCoursesProvider from '@/contexts/LessonCoursesProvider'

function MyApp({ Component, pageProps }) {
  return (
    // using apolloprovider to get data from wordpress
    <ApolloProvider client={client}>
      <LessonCoursesProvider>
        <Component {...pageProps} />
      </LessonCoursesProvider>
    </ApolloProvider>
  )
}

export default MyApp

