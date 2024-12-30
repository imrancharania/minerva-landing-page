"use client"

import Link from "next/link";

export function Footer() {
    return (
        <nav className="w-full bg-primary">
            <div className="relative max-w-7xl w-full sm:flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
                <div className="md:col-span-3">
                    <Link className="inline-block" href="/">
                        <h1 className="text-3xl text-secondary font-bold tracking-wider">ONESTA</h1>
                    </Link>
                </div>
                <div className="hidden md:flex col-span-6 gap-x-12">
                </div>
                <div className="md:col-span-3"><p className="text-secondary">© 2025 Onesta, Inc. All rights reserved.</p></div>
            </div>
        </nav>
    );
}