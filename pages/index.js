import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Example Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome!" />
        <p className="description">
          Frontend will consume <code>/api/post</code> to proxy API request methods
        </p>
        <p className="description">
          Backend is currently consumed via GraphQL/Apollo
        </p>
      </main>

      <Footer />
    </div>
  )
}
