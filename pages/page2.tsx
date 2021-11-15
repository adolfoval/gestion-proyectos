import React from 'react'
import Link from "next/link"

const page2 = () => {
    return (
        <div>
            Page2
            <Link href="/">
                <a>Ir al index.</a>
            </Link>
        </div>
    )
}

export default page2
