import Layout from "../Layout.jsx";
import { Link } from "react-router-dom";
import CardLink from "../CardLink.jsx";


export default function ML() {
  return (
    <Layout>
      <section className="py-10">
        <p className="text-sm/6 text-slate-300">Portfolio</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl text-emerald-300/70">
          Machine Learning Projects
        </h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Experiments and implementations in prediction modeling, feature
          engineering, and applied machine learning.
        </p>
      </section>

      <section className="pb-16">
        <ul className="mt-6 space-y-4">

          {/* Project 1 — external */}
          <li>
            <a
              href="https://financial-news-sentiment-signals.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="card card-interactive block"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="card-title">
                  Market Sentiment Analysis Dashboard
                </h3>
                <span className="card-meta">2025</span>
              </div>

              <p className="card-body italic mt-1">
                A web-based dashboard that ingests financial news from APIs and GDELT, applies FinBERT
                sentiment analysis, and merges the resulting sentiment signals with historical stock
                returns to generate an exportable dataset for market analysis and feature engineering.
              </p>
            </a>
          </li>

          {/* Project 2 — internal */}
          <li>
            <Link
              to="/coding/BoxOffice"
              className="card card-interactive block"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="card-title">
                  Box Office Revenue Prediction
                </h3>
                <span className="card-meta">2024–2025</span>
              </div>

              <p className="card-body italic mt-1">
                Predicting log box-office revenue using movie metadata, ratings aggregates, Rotten
                Tomatoes scores, review sentiment, and credits-derived features. Built with LightGBM
                and an iterative residual-augmentation approach, with feature importance analysis via SHAP.
              </p>
            </Link>
          </li>

        </ul>
      </section>

    </Layout>
  );
}



