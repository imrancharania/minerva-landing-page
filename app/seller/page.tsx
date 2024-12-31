/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SellerRoute() {
  return (
    <div>
      <section className="relative w-full px-4 md:px-12 flex items-center justify-center mt-12 mb-12">
        <div className="max-w-3xl">
          <p className="text-normal text-muted-foreground font-bold">
            AI-POWERED SKINCARE MARKETPLACE
          </p>
          <h1 className="text-6xl font-semibold mt-8 leading-tight sm:leading-none">
            <span className="text-primary underline underline-offset-8 decoration-4 decoration-wavy">
              Stand out
            </span>{" "}
            from the crowd.
          </h1>
          <p className="lg:text-2xl text-muted-foreground sm:mt-12 mt-8 w-[85%] font-normal text-base mb-12 mb-12">
            Take your skincare brand to the next level and sell more with the
            only AI-powered marketplace that helps customers find the right
            products that work for their skin&apos;s unique needs.
          </p>
          <Button className="h-12">
            <Link
              className="text-lg font-semibold"
              href="https://imrancharania.typeform.com/to/jVbPtPW3"
              target="_blank"
            >
              Get in touch &nbsp; &rarr;
            </Link>
          </Button>
        </div>
        <div className="hidden sm:block">
          <img
            className="rounded-3xl"
            src="sellerHero.jpg"
            width={400}
            height={600}
            alt="Hero image"
          />
        </div>
      </section>
      <hr className="sm:mx-48 mx-12" />
      <section className="text-center mt-12">
        <p className="text-normal text-muted-foreground font-bold">
          HOW IT WORKS
        </p>
        <h1 className="text-3xl font-semibold mt-4 px-4">
          Just upload your product catalog and we&apos;ll do the rest.
        </h1>
      </section>
      <section className="relative w-full px-4 md:px-12 sm:flex justify-center mt-12 mb-12">
        <div className="text-center mt-12 mb-12 md:mx-12">
          <img
            className="rounded-full mx-auto"
            src="products.jpg"
            width={240}
            height={240}
            alt="Product image"
          />
          <p className="text-normal text-muted-foreground font-bold mt-8 mb-4">
            LIST YOUR PRODUCTS
          </p>
          <p className="font-semibold mx-auto w-[300px]">
            Add ingredients, images, and variants with links to your store.
          </p>
        </div>
        <div className="text-center mt-12 mb-12 md:mx-12">
          <img
            className="rounded-full mx-auto"
            src="match.jpg"
            width={240}
            height={240}
            alt="Match image"
          />
          <p className="text-normal text-muted-foreground font-bold mt-8 mb-4">
            WE&apos;LL MAKE RECOMMENDATIONS
          </p>
          <p className="font-semibold mx-auto w-[300px]">
            Our AI will present products that best help customers with their
            concerns.
          </p>
        </div>
        <div className="text-center mt-12 mb-12 md:mx-12">
          <img
            className="rounded-full mx-auto"
            src="checkout.jpg"
            width={240}
            height={240}
            alt="Checkout image"
          />
          <p className="text-normal text-muted-foreground font-bold mt-8 mb-4">
            CUSTOMERS ARE SENT TO YOU
          </p>
          <p className="font-semibold mx-auto w-[300px]">
            Ready to purchase customers are sent directly to your store.
          </p>
        </div>
      </section>
      <hr className="sm:mx-48 mx-12" />
      <section className="text-center mt-12">
        <p className="text-normal text-muted-foreground font-bold">PRICING</p>
        <h1 className="text-3xl font-semibold mt-4 px-4">
          Simple, transparent pricing.
        </h1>
        <div className="sm:flex justify-center justify-items-center mt-12 mb-12">
          <Card className="w-[350px] sm:m-12 mt-4">
            <CardHeader>
              <CardTitle className="text-normal text-primary font-bold">
                SUBSCRIPTION
              </CardTitle>
              <CardDescription>
                Monthly fee. Unlimited products.
              </CardDescription>
            </CardHeader>
            <CardContent className="m-12">
              <span className="text-6xl font-semibold">$39</span> / mo
            </CardContent>
          </Card>
          <Card className="w-[350px] sm:m-12 mt-4">
            <CardHeader>
              <CardTitle className="text-normal text-primary font-bold">
                COMMISSION
              </CardTitle>
              <CardDescription>Cost-per-click.</CardDescription>
            </CardHeader>
            <CardContent className="m-12">
              <span className="text-6xl font-semibold">15%</span> / min 30¢
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="relative w-full bg-secondary pt-12 pb-12 mt-12">
        <div className="text-center">
          <p className="text-normal text-muted-foreground font-bold">
            AI-POWERED SKINCARE MARKETPLACE
          </p>
          <h1 className="text-4xl font-semibold mt-4 mb-8 px-4">
            Rise above the rest and sell more with Onesta.
          </h1>
          <Button className="h-12">
            <Link
              className="text-lg font-semibold"
              href="https://imrancharania.typeform.com/to/jVbPtPW3"
              target="_blank"
            >
              Get in touch &nbsp; &rarr;
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
