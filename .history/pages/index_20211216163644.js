import Head from 'next/head'

import Header from '../components/Header'

export default function Home() {
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


export async function getServer