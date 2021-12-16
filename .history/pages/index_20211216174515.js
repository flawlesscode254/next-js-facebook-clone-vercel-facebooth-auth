import Head from 'next/head'
import { useSession, signIn } from "next-auth/react";

import Header from '../components/Header'
import LogIn from '../components/LogIn';

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
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
      </>
    );
  }
  return (
    <>
      
    </>
  );
}
