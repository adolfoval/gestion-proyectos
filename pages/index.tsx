import type { NextPage } from 'next'
import Link from "next/link"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      <Head>
        <title>Home | Gestion de proyectos - dev</title>
      </Head>
      Hola mundo
      <Link href="adminUsuarios">
      <a>Ir a pagina 2.</a>
      </Link>
      <div>
        <i className = "fas fa-home"/>
      </div>
    </div>
  )
}

export default Home
