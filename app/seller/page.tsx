import { Button } from "@/components/ui/button";
// import SellerForm from "../ui/components/SellerForm";
import Link from "next/link";
import Image from "next/image";

export default function SellerRoute() {
    return (
        <section className="relative w-full px-4 md:px-12 flex items-center justify-center mt-12">
            <div className="max-w-3xl">
                <p className="text-normal font-bold">FOR SKINCARE BRANDS</p>
                <h1 className="text-6xl font-semibold mt-8"><span className="text-primary underline underline-offset-8 decoration-4 decoration-wavy">Stand out</span> from the crowd.</h1>
                <p className="lg:text-2xl text-muted-foreground mt-12 w-[85%] font-normal text-base mb-12">
                    Take your skincare brand to the next level and sell more with the only AI-powered marketplace that helps customers find the right products that work for their skin&apos;s unique needs.
                </p>
                <Button className="h-12"><Link className="text-lg font-semibold" href="/seller">Get in touch &nbsp; &rarr;</Link></Button>
            </div>
            <div>
                <Image className="rounded-3xl" src="/hero.jpg" width={400} height={600} alt="Hero image"/>
            </div>
            {/* <div className="max-w-md mx-auto text-center items-center justify-center mt-8">
                <SellerForm />
                </div> */}
        </section>
    );
}