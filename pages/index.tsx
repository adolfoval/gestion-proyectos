import type { NextPage } from 'next'
import Head  from 'next/head'
import Link from "next/link"
import React from 'react'

const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      <Head>
        <title>Admin Usuarios | Gestion de proyectos</title>
      </Head>
      Hola mundo desde index main
      <Link href="page2">
        <a>Ir a pagina 2.</a>
      </Link>
    </div>
  )
}

export default Home
