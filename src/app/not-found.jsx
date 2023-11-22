"use client"

import Link from "next/link"

const NotFound = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-2 flex-col">
                <h2 className="text-color-white text-2xl text-bold">404 | NOT FOUND</h2>
                <Link href="/" className="text-color-white hover:text-color-primary transition-all underline">Homepage</Link>
            </div>
        </div>
    )
}

export default NotFound