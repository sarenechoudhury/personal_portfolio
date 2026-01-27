import { Link } from 'react-router-dom';
import Layout from './Layout.jsx';

export default function Film() {
  return (
    <Layout>
      {/* Page header */}
      <section className="py-10">
        <p className="text-sm/6 text-neutral-600">Portfolio</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          Film
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Notes and essays on cinema, media, and technology.
        </p>
      </section>

      {/* Pieces */}
      <section className="pb-16">
        <ul className="mt-4 space-y-4">
          <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/films/deception" className="font-medium group-hover:underline">
                An Algorithmic Politics of Deception
              </Link>
              <span className="text-xs text-neutral-500">May 2025</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 italic">
              A critique on the manner by which social media has diluted activism.
            </p>
          </li>

          <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/films/whatpoetry" className="font-medium group-hover:underline">
                What is Poetry To You
              </Link>
              <span className="text-xs text-neutral-500">March 2024</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 italic">
              A critique on the manner by which social media has diluted activism.
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

