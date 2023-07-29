import React from "react";

export default function Navbar() {

    const links: {url: string, label: string}[] = [
        {
            url: '/',
            label: 'Home'
        },
        {
            url: '/about',
            label: 'About'
        }
    ];

    const linksRendered = links.map((link) => {
        return <a href={link.url} className="text-gray-800 text-sm font-bold inline-block mr-4 py-2 uppercase">
            {link.label}
        </a>
    })

    return (
        <nav className="relative shadow-lg bg-white">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    {linksRendered}
                </div>
            </div>
        </nav>
    )
}
