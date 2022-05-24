import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="font-mono text-xl text-center">
        <p>Front End Developer | React | Next.js</p>
      </section>
    </Layout>
  )
}
