import { getSession } from 'next-auth/react'
import Head from 'next/head'

import Header from '../components/Header'
import LogIn from "./"

export default function Home({ session }) {
  if (!session) return <Login />
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
      </Head>

        {/* Header */}

        <Header />

        <main>
          {/* Sidebar */}
          {/* Feed */}
          {/* Widgets */}
        </main>

    </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}