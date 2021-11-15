import type { NextPage } from 'next'
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      Hola mundo
      <Link href="page2">
      <p>Ir a pagina 2.</p>
      </Link>
    </div>
  )
}

export default Home
