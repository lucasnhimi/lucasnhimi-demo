import Head from 'next/head'
import useAuth from './../hooks/useAuth';

export default function Home() {
  const { signin, user } = useAuth();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <span>user: {user?.name}</span>
        <button onClick={() => signin()}>Entrar com github</button>
      </main>    
    </div>
  )
}
