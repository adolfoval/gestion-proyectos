import React from 'react'
import Link from "next/link"

const page2 = () => {
    return (
        <div>
            Page2
            <Link href="/">
                <p>Ir al index.</p>
            </Link>
        </div>
    )
}

export default page2
