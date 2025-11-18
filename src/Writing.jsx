import { Link } from 'react-router-dom';
import Layout from './Layout';

export default function Writing() {
  return (
    <Layout>
      {/* Page header */}
      <section className="py-10">
        <p className="text-sm/6 text-neutral-600">Portfolio</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          Writing
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Essays, personal pieces, and poems. A selection of work at the
          intersection of cinema, philosophy, and narrative craft.
        </p>
      </section>

      {/* Categories */}
      <section className="pb-16">
        <ul className="mt-4 space-y-4">
          <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/writing/personal" className="font-medium group-hover:underline">
                Personal Pieces
              </Link>
              <span className="text-xs text-neutral-500">Essays & notes</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600">
              Reflections and narratives from lived experience and observation.
            </p>
          </li>

          <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/writing/analytical" className="font-medium group-hover:underline">
                Analytical Essays
              </Link>
              <span className="text-xs text-neutral-500">Criticism</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600">
              Film and philosophy—close readings (e.g., Vertigo, Chinatown) and theory.
            </p>
          </li>

          <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/writing/poetry" className="font-medium group-hover:underline">
                Poetry
              </Link>
              <span className="text-xs text-neutral-500">Selected poems</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600">
              Language experiments and lyric pieces.
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  );
}


