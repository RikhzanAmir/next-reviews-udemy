import Link from "next/link"
import './globals.css'
import Navbar from "@/Components/Navbar"

export default function RootLayout({children}){ 
    return (
        <html lang="en">
            <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
                <header>
                    <Navbar />
                </header>
                <main className="grow py-3">
                    {children}
                    </main>
                <footer className="border-t py-3 text-center text-xs">
                    Gama data and images courtesy of{' '}<a href="https://rawg.io" target="_blank" className="text-orange-800  hover:underline">RAWG</a>
                </footer>
            </body>

        </html>
    )
}