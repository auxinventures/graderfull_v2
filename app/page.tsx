// app/page.tsx (or app/landing/page.tsx)
import Link from "next/link";

export const metadata = {
  title: "GradeAIQ – Save Time. Keep Control.",
  description:
    "GradeAIQ – AI essay grading that saves teachers hours. Upload scanned or typed essays, use your rubric, and get transparent, editable feedback instantly.",
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#222]">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <img
            src="/grade-aiq-logo.png"
            alt="GradeAIQ Logo"
            className="h-8 w-auto"
          />
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a href="#how-it-works" className="text-[#222] hover:text-[#2d70f2]">
              Approach
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-[#222] hover:text-[#2d70f2]">
              Pricing
            </a>
          </li>
          <li>
            <a href="#about" className="text-[#222] hover:text-[#2d70f2]">
              About us
            </a>
          </li>
          <li>
            <a href="#faq" className="text-[#222] hover:text-[#2d70f2]">
              FAQ
            </a>
          </li>
        </ul>

        <Link
          href="/login"
          className="hidden rounded-md border-2 border-[#2d70f2] px-4 py-2 font-semibold text-[#2d70f2] transition-colors hover:bg-[#2d70f2] hover:text-white md:inline-block"
        >
          Login
        </Link>

        {/* Simple placeholder hamburger for mobile (no JS needed) */}
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200"
        >
          <span className="block h-0.5 w-5 bg-gray-800" />
          <span className="block h-0.5 w-5 bg-gray-800 mt-1.5" />
          <span className="block h-0.5 w-5 bg-gray-800 mt-1.5" />
        </button>
      </nav>

      {/* Hero */}
      <header className="mx-auto max-w-[1400px] px-6">
        <div className="rounded-lg bg-white p-8 text-center shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
            Regain Your Evenings. Grade Smarter with GradeAIQ.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#666] md:text-xl">
            Upload essays, apply your rubric, and get AI-powered feedback you
            control — in minutes, not hours.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/login"
              className="inline-block rounded-md bg-[#2d70f2] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#1c54c8]"
            >
              Try GradeAIQ Free
            </Link>
            <a
              href="#how-it-works"
              className="inline-block rounded-md border-2 border-[#2d70f2] px-5 py-3 font-semibold text-[#2d70f2] transition-colors hover:bg-[#2d70f2] hover:text-white"
            >
              How It Works
            </a>
          </div>
        </div>
      </header>

      {/* Showcase Image */}
      <section className="mx-auto mt-8 max-w-[1400px] px-6">
        <div className="overflow-hidden rounded-lg">
          <img
            src="/Grade AIQ Dashboard.png"
            alt="Grade AIQ Dashboard"
            className="block w-full"
          />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-[1400px] px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Why Teachers Love GradeAIQ</h2>
        <p className="mt-2 text-center text-[#666]">
          GradeAIQ saves you hours without losing control over your rubric.
        </p>

        <div className="mt-8 flex flex-wrap items-stretch justify-center gap-8">
          <div className="w-full max-w-sm text-center">
            <img
              src="/Grade AIQ Feedback.png"
              alt="Feedback"
              className="w-full rounded-lg"
            />
            <h3 className="mt-3 text-xl font-semibold">Instant AI Feedback</h3>
            <p className="text-[#666]">
              Upload an essay and see immediate, rubric-based suggestions.
            </p>
          </div>

          <div className="w-full max-w-sm text-center">
            <img
              src="/Grade AIQ Report.png"
              alt="Reports"
              className="w-full rounded-lg"
            />
            <h3 className="mt-3 text-xl font-semibold">Transparent Reports</h3>
            <p className="text-[#666]">
              See where points were given, and adjust as needed.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-[1400px] px-6 pb-10 text-center text-sm text-[#666]">
        <p>&copy; 2025 Auxin Ventures. All rights reserved.</p>
        <p className="mt-2 space-x-2">
          <a href="#" className="text-[#2d70f2] hover:underline">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="#" className="text-[#2d70f2] hover:underline">
            Terms of Use
          </a>
          <span>•</span>
          <a href="#" className="text-[#2d70f2] hover:underline">
            Impressum
          </a>
        </p>
      </footer>
    </main>
  );
}
