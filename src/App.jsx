import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <Link to="/" className="font-medium tracking-tight">Sarene Choudhury</Link>
          <div className="flex items-center gap-5 text-sm">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/writing" className="hover:underline">Writing</Link>
            <Link to="/code" className="hover:underline">Code</Link>
            <Link to="/film" className="hover:underline">Film</Link>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-3xl px-4">
        {/* Hero */}
        <section className="py-14 sm:py-20">
          <p className="text-sm/6 text-neutral-600">CS & Cinema Studies @ UChicago</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Machine Learning for Story & Screens
          </h1>
          <p className="mt-5 max-w-xl text-neutral-700">
            I’m a developer and writer exploring how ML/AI can power creative tools and
            media analysis. I’ve built models in TensorFlow & LightGBM, and I publish film
            and philosophy essays.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/code"
              className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              View ML & web projects
            </Link>
            <Link
              to="/writing"
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              Read essays
            </Link>
            <a
              href="/dist/Sarene_Choudhury_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              Resume (PDF)
            </a>
            <a
              href="mailto:sareneac@icloud.com"
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              Email me
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-600">
            <a className="underline underline-offset-2" href="https://github.com/sarenechoudhury" target="_blank" rel="noreferrer">GitHub</a>
            <a className="underline underline-offset-2" href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>

        {/* Highlights — concise, no bulky cards */}
        <section className="pb-20">
          <h2 className="text-xl font-semibold">Highlights</h2>
          <ul className="mt-4 space-y-4">
            <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-medium group-hover:underline">
                  Quant Research Intern — Quantbot Technologies (NYC)
                </span>
                <span className="text-xs text-neutral-500">2024</span>
              </div>
              <p className="mt-1 text-sm text-neutral-600">
                Built and evaluated models with TensorFlow & LightGBM; explored gradient quantization,
                model eval with DeepChecks, and feature generation for time-series prediction.
              </p>
            </li>

            <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
              <div className="flex items-baseline justify-between gap-4">
                <Link to="/code" className="font-medium group-hover:underline">
                  ML + Web projects
                </Link>
                <span className="text-xs text-neutral-500">Python • JS • C</span>
              </div>
              <p className="mt-1 text-sm text-neutral-600">
                LightGBM box-office prediction, LSTM experiments, and a Vite/React portfolio
                on GitHub Pages with custom domain.
              </p>
            </li>

            <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
              <div className="flex items-baseline justify-between gap-4">
                <Link to="/writing" className="font-medium group-hover:underline">
                  Film & philosophy essays
                </Link>
                <span className="text-xs text-neutral-500">Criticism</span>
              </div>
              <p className="mt-1 text-sm text-neutral-600">
                Vertigo, Chinatown, and other analytical/creative pieces connecting cinema,
                theory, and narrative structure.
              </p>
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-3xl px-4 py-8 text-sm text-neutral-600">
          © {new Date().getFullYear()} Sarene Choudhury
        </div>
      </footer>
    </div>
  );
}



