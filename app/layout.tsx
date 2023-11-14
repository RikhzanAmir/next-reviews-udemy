import Link from "next/link"
import './globals.css'
import Navbar from "@/components/Navbar"
import { orbitron } from "./fonts"

export const metadata = { //for seo 
    title: {
        description : "Only the best indie games, reviewed for you.",
        default : 'Indie Gamer',
        template: '%s | Indie Gamer',
    } 
} 
  
export default function RootLayout({children}){ 
    return (
        <html lang="en" className={orbitron.variable}>
            <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
                <header>
                    <Navbar />
                </header>
                <main className="grow py-3">
                    {children}
                    </main>
                <footer className="border-t py-3 text-center text-xs text-slate-500">
                    Gama data and images courtesy of{' '}<a href="https://rawg.io" target="_blank" className="text-orange-800  hover:underline">RAWG</a><p>Hosted by vercel</p>
                </footer>
            </body>

        </html>
    )
}