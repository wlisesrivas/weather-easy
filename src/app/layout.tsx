import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Provider from "@/store/provider";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Easy Weather',
    description: 'This is a simple Weather App built with Next.js that allows users to get real-time weather information for a specific location.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Provider>
            <Navbar/>
            {children}
            <Footer/>
        </Provider>
        </body>
        </html>
    )
}
