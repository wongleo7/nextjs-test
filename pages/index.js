import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Exploring JAMStack</p>
        <p>
          <Link href="/rendering/server-rendered">
            <a>Server Rendered</a>
          </Link>
        </p>
        <p>
          <Link href="/rendering/server-generated">
            <a>Server Generated</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}