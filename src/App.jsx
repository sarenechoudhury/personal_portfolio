import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout.jsx";

export default function App() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-14 sm:py-20">
        <p className="text-sm/6 text-slate-300">CS & Cinema Studies @ UChicago</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl text-emerald-300/70">
          Machine Learning for Story & Screens
        </h1>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/code" className="btn btn-primary hover:underline hover:text-emerald-200 hover:decoration-emerald-300/60">
            View ML & web projects
          </Link>

          <Link to="/writing" className="btn btn-primary hover:underline hover:text-emerald-200 hover:decoration-emerald-300/60">
            Read essays
          </Link>

          <a
            href="/Sarene_Choudhury_1:26.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary hover:underline hover:text-emerald-200 hover:decoration-emerald-300/60"
          >
            Resume
          </a>

        </div>
      </section>

      {/* Highlights */}
      <section className="pb-20">
        <h2 className="text-xl font-semibold text-emerald-300/70">Highlights</h2>
        <ul className="mt-6 space-y-4">
          <li className="card">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/about#work-experience" className="card-title card-link underline-offset-4 hover:underline hover:text-emerald-200 hover:decoration-emerald-300/60">
                Quant Research Intern — Quantbot Technologies (NYC)
              </Link>
              <span className="card-meta">2024</span>
            </div>
            <p className="card-body">
              Built and evaluated models with TensorFlow & LightGBM; explored gradient quantization,
              model eval with DeepChecks, and feature generation.
            </p>
          </li>

          <li className="card">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/code" className="card-title card-link underline-offset-4 hover:underline hover:text-emerald-200 hover:decoration-emerald-300/60">
                ML + Web projects
              </Link>
              <span className="card-meta">Python • JS • C</span>
            </div>
            <p className="card-body">
              LightGBM box-office prediction, LSTM experiments, and a Vite/React portfolio.
            </p>
          </li>

          <li className="card">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/writing" className="card-title card-link underline-offset-4 hover:underline hover:text-emerald-200 hover:decoration-emerald-300/60">
                Film & philosophy essays
              </Link>
              <span className="card-meta">Criticism</span>
            </div>
            <p className="card-body">
              Vertigo, Chinatown, and other analytical/creative pieces connecting cinema and theory.
            </p>
          </li>
        </ul>

      </section>
    </Layout>
  );
}




