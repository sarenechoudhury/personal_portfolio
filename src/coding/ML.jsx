import Layout from '../Layout.jsx';

export default function ML() {
  return (
    <Layout>
      {/* Page header */}
      <section className="py-10">
        <p className="text-sm/6 text-neutral-600">Portfolio</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          Machine Learning Projects
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Experiments and implementations in prediction modeling, feature 
          engineering, and applied machine learning.
        </p>
      </section>

      {/* Project list */}
      <section className="pb-16">
        <ul className="mt-4 space-y-4">

        <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
          <div className="flex items-baseline justify-between gap-4">
            <a
              href="https://financial-news-sentiment-signals.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium group-hover:underline"
            >
              Financial News Sentiment Signals
            </a>
            <span className="text-xs text-neutral-500">2025</span>
          </div>
          <p className="mt-1 text-sm text-neutral-600 italic">
            A machine learning workflow using sentiment extraction and
            volatility-based prediction signals. Includes classification, feature
            engineering, and NLP modeling.
          </p>
        </li>


          {/* Add more ML projects here when ready */}

        </ul>
      </section>
    </Layout>
  );
}

