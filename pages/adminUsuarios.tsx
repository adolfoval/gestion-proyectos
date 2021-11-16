import React from 'react'
import Link from "next/link"
import Head from "next/head"

const adminUsuarios = () => {
    return (
        <div>
            <Head>
                <title>Admin Usuarios | Gestion de proyectos</title>
            </Head>
            Page2
            <Link href="/">
                <a>Ir al index.</a>
            </Link>
        </div>
    )
}

export default adminUsuarios
