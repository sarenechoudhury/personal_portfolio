import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout.jsx";

export default function App() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-14 sm:py-20">
        <p className="text-sm/6 text-neutral-600">CS & Cinema Studies @ UChicago</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Machine Learning for Story & Screens
        </h1>
        <p className="mt-5 max-w-xl text-neutral-700">
          I’m a programmer and writer exploring how ML/AI can power creative tools and
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
            href="/Sarene_Choudhury_1:26.pdf"
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
          <a
            className="underline underline-offset-2"
            href="https://github.com/sarenechoudhury"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="underline underline-offset-2"
            href="https://www.linkedin.com/in/sarene-choudhury-a6b6a929b"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-20">
        <h2 className="text-xl font-semibold">Highlights</h2>
        <ul className="mt-4 space-y-4">
          <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/about#work-experience" className="font-medium group-hover:underline">
                Quant Research Intern — Quantbot Technologies (NYC)
              </Link>
              <span className="text-xs text-neutral-500">2024</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600">
              Built and evaluated models with TensorFlow & LightGBM; explored gradient
              quantization, model eval with DeepChecks, and feature generation.
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
              LightGBM box-office prediction, LSTM experiments, and a Vite/React portfolio.
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
              Vertigo, Chinatown, and other analytical/creative pieces connecting cinema and theory.
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  );
}




