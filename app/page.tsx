import RegisterForm from "./ui/components/RegisterForm";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-6xl font-semibold text-center mt-12">
        <h1>Your <span className="text-primary underline underline-offset-8 decoration-4 decoration-wavy">healthiest</span> skin ever</h1>
        <p className="lg:text-2xl text-muted-foreground mx-auto mt-8 w-[70%] font-normal text-base">
          Find the right skincare products that work for your skin&apos;s unique needs and preferences with the only <span className="text-primary underline underline-offset-8 decoration-4 decoration-wavy">AI-powered</span> skincare advisor.
        </p>
      </div>
      <div className="mt-12 text-center">
        <p className="lg:text-xl font-semibold text-base">Sign up for early access</p>
        <RegisterForm />
      </div>
    </section>
  );
}
