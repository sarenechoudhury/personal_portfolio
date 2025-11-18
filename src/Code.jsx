import { Link } from 'react-router-dom';
import Layout from './Layout';

export default function Code() {
  return (
    <Layout>
      {/* Page header */}
      <section className="py-10">
        <p className="text-sm/6 text-neutral-600">Portfolio</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          Code
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Selected coding and machine learning projects — from Python data work 
          to model experimentation and low-level C programming.
        </p>
      </section>

      {/* Categories */}
      <section className="pb-16">
        <ul className="mt-4 space-y-4">
          <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/coding/python" className="font-medium group-hover:underline">
                Python
              </Link>
              <span className="text-xs text-neutral-500">Scripting & data analysis</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600">
              Explorations in automation, data processing, and algorithmic workflows.
            </p>
          </li>

          <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/coding/ml" className="font-medium group-hover:underline">
                Machine Learning
              </Link>
              <span className="text-xs text-neutral-500">Models & experiments</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600">
              LightGBM, TensorFlow, and LSTM projects focused on prediction, evaluation, 
              and model interpretability.
            </p>
          </li>

          <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/coding/c" className="font-medium group-hover:underline">
                C
              </Link>
              <span className="text-xs text-neutral-500">Systems programming</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600">
              Core logic implementation and lower-level work for performance-critical applications.
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  );
}


