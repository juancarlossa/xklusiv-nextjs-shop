
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo ({ children, className }: { children: React.ReactNode, className: string }) {
  return (
    <section className={`${className} h-[80vh] size-full rounded-md relative flex flex-col items-center justify-center antialiased`}>

      <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Join the waitlist
      </h1>
      <p></p>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Welcome to MailJet, the best transactional email service on the web.
        We provide reliable, scalable, and customizable email solutions for
        your business. Whether you&apos;re sending order confirmations,
        password reset emails, or promotional campaigns, MailJet has got you
        covered.
      </p>
      <input
        type="text"
        placeholder="hi@manuarora.in"
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-[300px] relative z-10 mt-4  placeholder:text-neutral-700"
      />
      {children}
      <BackgroundBeams />

    </section>
  );
}
