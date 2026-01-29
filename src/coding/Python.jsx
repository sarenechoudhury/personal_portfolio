import Layout from '../Layout.jsx';
import CardLink from "../CardLink.jsx";

export default function Python() {
  return (
    <Layout>
      {/* Page header */}
      <section className="py-10">
        <p className="text-sm/6 text-neutral-600">Portfolio</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          Python Projects
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Explorations in scripting, automation, data processing, and experimental 
          computational tools.
        </p>
      </section>

      {/* Project list */}
      <section className="pb-16">
        <ul className="mt-4 space-y-4">

          <li className="group card transition">
            <div className="flex items-baseline justify-between gap-4">
              <span className="card-title card-link group-">
                Algorithmic Text Analysis Toolkit
              </span>
              <span className="text-xs text-neutral-500">2024</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 italic">
              A set of Python utilities for analyzing language patterns, 
              performing sentiment scoring, and automating text preprocessing.  
              Integrates regex, spaCy, and custom feature pipelines.
            </p>
          </li>

          {/* Add more Python projects as needed */}

        </ul>
      </section>
    </Layout>
  );
}

