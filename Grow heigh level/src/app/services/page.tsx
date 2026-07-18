import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <span className="rounded-full bg-black px-5 py-1.5 text-sm font-semibold text-green-400">
          Our Services
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Everything You Need to Grow{" "}
          <span className="bg-[linear-gradient(90deg,#22c55e,#3b82f6,#eab308)] bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_5s_linear_infinite]">
            Under One Roof.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
          From CRM setup to AI automation, we provide end-to-end GoHighLevel
          services so you can focus on closing deals.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
          >
            Book a Discovery Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
