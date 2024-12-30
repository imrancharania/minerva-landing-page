"use client";

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
          <h1 className="text-3xl text-primary font-bold tracking-wider">
            ONESTA
          </h1>
        </Link>
      </div>
      <div className="hidden md:flex items-center col-span-6 gap-x-12">
      </div>
      <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
        <Button variant="outline" asChild>
          <Link
            href={cn(
              location === "/seller"
                ? "https://imrancharania.typeform.com/to/jVbPtPW3"
                : "/seller"
            )}
            target={cn(location === "/seller" ? "_blank" : "")}
          >
            {cn(location === "/seller" ? "Register" : "Sell with Onesta")}
          </Link>
        </Button>
      </div>
    </nav>
  );
}
