"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
    const location = usePathname();

    return (
        <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
            <div className="md:col-span-3">
                <Link className="inline-block" href="/">
                    <h1 className="text-3xl text-primary font-bold tracking-wider">ONESTA</h1>
                </Link>
            </div>
            <div className={cn(location === '/seller' ? "md:flex items-center col-span-6 gap-x-12" : "hidden md:flex items-center col-span-6 gap-x-12")}>
                <Link className="text-lg font-medium" href="/seller">How it works</Link>
                <Link className="text-lg font-medium" href="/seller">Pricing</Link>
                <Link className="text-lg font-medium" href="/seller">Company</Link>
                <Link className="text-lg font-medium" href="/seller">Contact</Link>
            </div>
            <div className={cn(location === '/success' ? "invisible flex items-center gap-x-2 ms-auto md:col-span-3" : "flex items-center gap-x-2 ms-auto md:col-span-3")}>
                <Button asChild>
                    <Link href={cn(location === '/seller' ? "/seller" : "")}>{cn(location === '/seller' ? "Register" : "Become a Seller")}</Link>
                </Button>
            </div>
        </nav>
    );
}