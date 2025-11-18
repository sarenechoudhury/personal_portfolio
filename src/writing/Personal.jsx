import { Link } from 'react-router-dom';
import Layout from '../Layout';

export default function Personal() {
  return (
    <Layout>
      {/* Page header */}
      <section className="py-10">
        <p className="text-sm/6 text-neutral-600">Writing</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          Personal Pieces
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Reflections, narratives, and explorations drawn from lived experience.
        </p>
      </section>

      {/* List of pieces */}
      <section className="pb-16">
        <ul className="mt-4 space-y-4">

          <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/writing/commandments" className="font-medium group-hover:underline">
                My Ten Commandments
              </Link>
              <span className="text-xs text-neutral-500">Oct 2022</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 italic">
              A doctrine formed on the sea.
            </p>
          </li>

          <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/writing/multiverse" className="font-medium group-hover:underline">
                Self-Worth in the Multiverse
              </Link>
              <span className="text-xs text-neutral-500">Oct 2022</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 italic">
              Inspired by the film <em>Everything Everywhere All At Once</em>.
            </p>
          </li>

          <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/writing/trutescu" className="font-medium group-hover:underline">
                Christina Trutescu Will Never Give Up
              </Link>
              <span className="text-xs text-neutral-500">Mar 2022</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 italic">
              Following her career from gymnast to the medical field.
            </p>
          </li>

        </ul>
      </section>
    </Layout>
  );
}

  