/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="w-full px-4 md:px-12 flex items-center justify-center mt-12 mb-12">
        <div className="sm:max-w-3xl">
          <p className="text-normal text-muted-foreground font-bold">
            AI-POWERED SKINCARE MARKETPLACE
          </p>
          <h1 className="text-6xl font-semibold leading-tight sm:leading-none mt-8">
            Your{" "}
            <span className="text-primary underline underline-offset-8 decoration-4 decoration-wavy">
              healthiest
            </span>{" "}
            skin ever.
          </h1>
          <p className="lg:text-2xl text-muted-foreground sm:mt-12 mt-8 w-[85%] font-normal text-base mb-12">
            Find the right skincare products from top brands that work for your
            skin&apos;s unique needs with the help of the only skincare
            marketplace powered by our AI skincare advisor.
          </p>
          <Button className="h-12">
            <Link
              className="text-lg font-semibold"
              href="https://imrancharania.typeform.com/to/ej90TQak"
              target="_blank"
            >
              Sign up today &nbsp; &rarr;
            </Link>
          </Button>
        </div>
        <div className="hidden sm:block">
          <img
            className="rounded-3xl"
            src="consumerHero.jpg"
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
        <h1 className="text-5xl font-semibold px-4 mt-4">Easy - just ask.</h1>
      </section>
      <section className="relative w-full md:px-12 md:flex justify-center mt-12 mb-12">
        <video width="1000" height="600" playsInline autoPlay loop muted src="demo.mp4" />
        {/* <div className="text-center mt-12 mb-12 md:mx-12">
          <img
            className="rounded-full mx-auto"
            src="products.jpg"
            width={240}
            height={240}
            alt="Product image"
          />
          <p className="text-normal text-muted-foreground font-bold mt-8 mb-4">
            FIND PRODUCTS
          </p>
          <p className="font-semibold mx-auto w-[300px]">
            &quot;I&apos;m looking for something to help me with my acne.&quot;
          </p>
        </div>
        <div className="text-center mt-12 mb-12 md:mx-12">
          <img
            className="rounded-full mx-auto"
            src="ingredients.jpg"
            width={240}
            height={240}
            alt="Ingredients image"
          />
          <p className="text-normal text-muted-foreground font-bold mt-8 mb-4">
            LOOK UP INGREDIENTS
          </p>
          <p className="font-semibold mx-auto w-[300px]">
            &quot;What&apos;s the best ingredient for improving dry skin?&quot;
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
            SEARCH YOUR WISHLIST
          </p>
          <p className="font-semibold mx-auto w-[300px]">
            &quot;Search my wishlist to help me treat dark circles.&quot;
          </p>
        </div> */}
      </section>
      <section className="relative w-full bg-secondary pt-12 pb-12 mt-12">
        <div className="text-center">
          <p className="text-normal text-muted-foreground font-bold">
            AI-POWERED SKINCARE MARKETPLACE
          </p>
          <h1 className="text-4xl font-semibold px-4 mt-4 mb-8">
            Your journey to healthier skin starts here.
          </h1>
          <Button className="h-12">
            <Link
              className="text-lg font-semibold"
              href="https://imrancharania.typeform.com/to/ej90TQak"
              target="_blank"
            >
              Sign up today &nbsp; &rarr;
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
