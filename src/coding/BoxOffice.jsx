import React from "react";
import Layout from "../Layout.jsx";

export default function BoxOffice() {
  return (
    <Layout>
      {/* Header */}
      <section className="py-10">
        <p className="text-sm/6 text-slate-300">Machine Learning</p>

        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl text-emerald-300/70">
          Box Office Revenue Prediction
        </h1>

        <p className="mt-3 max-w-2xl text-slate-300">
          Predicting <span className="text-slate-100">log box-office revenue</span> from film metadata,
          user ratings, Rotten Tomatoes scores, review sentiment aggregates, and credit-derived features.
          Built with a LightGBM core model plus residual feature augmentation and interpretability via SHAP.
        </p>

        {/* CTAs */}
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="https://github.com/sarenechoudhury/box_office_predictions"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View GitHub Repository
          </a>

          {/* Optional: if you later add a PDF/report */}
          {/* <a href="/BoxOffice_Report.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
            Read Report (PDF)
          </a> */}
        </div>

        <div className="mt-5 text-xs text-slate-400">
          Python • LightGBM • TensorFlow/Keras • scikit-learn • SHAP • Pandas
        </div>
      </section>

      {/* Quick summary cards */}
      <section className="pb-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card">
            <div className="card-title">Goal</div>
            <p className="card-body">
              Predict movie revenue (log-transformed) and analyze which signals most strongly relate to
              financial performance.
            </p>
          </div>

          <div className="card">
            <div className="card-title">Approach</div>
            <p className="card-body">
              Feature-rich tabular modeling with LightGBM and an iterative residual-augmentation strategy
              using neural network outputs as additional features.
            </p>
          </div>
        </div>
      </section>

      {/* Problem / Motivation */}
      <section className="py-8">
        <h2 className="text-xl font-semibold text-emerald-300/70">Problem & Motivation</h2>
        <div className="mt-4 space-y-3 text-slate-300 leading-7">
          <p>
            Box-office revenue is influenced by a mix of production factors (budget, runtime), audience
            behavior (ratings volume and variance), timing effects (release month/season), and external
            perception (critic vs audience response).
          </p>
          <p>
            This project builds a structured ML workflow to combine those signals into a single predictive
            model, while keeping an emphasis on <span className="text-slate-100">feature engineering</span> and
            <span className="text-slate-100"> interpretability</span>.
          </p>
        </div>
      </section>

      {/* Data */}
      <section className="py-8">
        <h2 className="text-xl font-semibold text-emerald-300/70">Data Sources</h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="card">
            <div className="card-title">Core movie metadata</div>
            <p className="card-body">
              Budget, revenue, popularity, runtime, genre, collection membership, release date, and other
              movie-level fields.
            </p>
          </div>

          <div className="card">
            <div className="card-title">User ratings aggregates</div>
            <p className="card-body">
              Aggregated per movie: mean rating, rating count, and rating standard deviation to capture
              popularity and polarization.
            </p>
          </div>

          <div className="card">
            <div className="card-title">Rotten Tomatoes signals</div>
            <p className="card-body">
              Critic score, audience score, and review sentiment counts aggregated to features like
              positive-review ratio.
            </p>
          </div>

          <div className="card">
            <div className="card-title">Credits / people features</div>
            <p className="card-body">
              Cast and crew parsing plus director-related signals, including mean historical revenue per
              director.
            </p>
          </div>
        </div>
      </section>

      {/* Feature engineering */}
      <section className="py-8">
        <h2 className="text-xl font-semibold text-emerald-300/70">Feature Engineering</h2>

        <div className="mt-4 space-y-4">
          <div className="card">
            <div className="card-title">Sentiment + perception features</div>
            <ul className="mt-3 list-disc pl-6 text-slate-300 space-y-1">
              <li>Positive review ratio and sentiment gap (positive − negative).</li>
              <li>Critic vs audience gap (audience_score − critic_score).</li>
              <li>Rating density and polarization index (rating_std / avg_user_rating).</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-title">Timing & seasonality</div>
            <ul className="mt-3 list-disc pl-6 text-slate-300 space-y-1">
              <li>Release year, month, quarter.</li>
              <li>Holiday season and summer blockbuster flags.</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-title">Interactions & transforms</div>
            <ul className="mt-3 list-disc pl-6 text-slate-300 space-y-1">
              <li>Outlier clipping (budget and revenue capped at high quantiles).</li>
              <li>Log transform target: <span className="text-slate-100">log_revenue = log1p(revenue)</span>.</li>
              <li>Interaction terms like budget × popularity, budget × runtime, and nonlinear popularity terms.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Modeling */}
      <section className="py-8">
        <h2 className="text-xl font-semibold text-emerald-300/70">Modeling</h2>

        <div className="mt-4 space-y-4">
          <div className="card">
            <div className="card-title">Train / test setup</div>
            <p className="card-body">
              Standard train/test split with scaling applied to selected continuous fields (e.g., popularity,
              runtime). Primary target is log-transformed revenue to stabilize variance and reduce outlier
              dominance.
            </p>
          </div>

          <div className="card">
            <div className="card-title">Augmented residual features (iterative)</div>
            <p className="card-body">
              A LightGBM model predicts the current target/residuals. A neural network is then trained on
              the residuals, and its outputs are appended as new features for the next iteration. This
              creates an “AugBoost”-style feature augmentation loop.
            </p>
          </div>

          <div className="card">
            <div className="card-title">Final model</div>
            <p className="card-body">
              A tuned LightGBM regressor trained with early stopping, bagging/feature subsampling, and
              regularization (L1/L2). Performance measured via RMSE on the held-out set.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <h2 className="text-xl font-semibold text-emerald-300/70">Results</h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="card">
            <div className="card-title">Metric</div>
            <p className="card-body">
              RMSE on validation set (log revenue).{" "}
              <span className="text-slate-400">
                (Add your final printed RMSE here when you’re ready.)
              </span>
            </p>
          </div>

          <div className="card">
            <div className="card-title">Key signals</div>
            <p className="card-body">
              Budget/popularity interactions, rating volume, perception gaps (critic vs audience), and
              timing/seasonality signals tend to rank highly.
            </p>
          </div>
        </div>

        {/* Optional visuals: drop plots here later */}
        <div className="mt-4 card">
          <div className="card-title">Interpretability (SHAP / feature importance)</div>
          <p className="card-body">
            Add a SHAP summary plot or top-feature bar chart screenshot here. This is the fastest way to
            make the page feel “real” and professional.
          </p>

          {/* Example placeholder block */}
          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-10 text-center text-sm text-slate-400">
            Plot placeholder (feature importance / SHAP)
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-8 pb-16">
        <h2 className="text-xl font-semibold text-emerald-300/70">What I Learned</h2>

        <div className="mt-4 space-y-4">
          <div className="card">
            <div className="card-title">Feature engineering matters</div>
            <p className="card-body">
              Combining perception signals (critic vs audience) with behavioral aggregates (rating count,
              variance) and timing effects improved model signal quality more than model complexity alone.
            </p>
          </div>

          <div className="card">
            <div className="card-title">Next steps</div>
            <ul className="mt-3 list-disc pl-6 text-slate-300 space-y-1">
              <li>Cross-validation (including time-aware splits by release year).</li>
              <li>More robust hyperparameter search and calibration.</li>
              <li>Better proxies for marketing spend, distribution, and franchise effects.</li>
              <li>Cleaner handling of missingness and potential leakage checks.</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
