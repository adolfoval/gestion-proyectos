import type { NextPage } from 'next'
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      Hola mundo
      <Link href="page2">
      <a>Ir a pagina 2.</a>
      </Link>
    </div>
  )
}

export default Home
