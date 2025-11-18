import { Link } from 'react-router-dom';
import Layout from '../Layout';

export default function C() {
  return (
    <Layout>
      {/* Page header */}
      <section className="py-10">
        <p className="text-sm/6 text-neutral-600">Coding</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          C Projects
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Low-level programming work focused on systems logic, data structures, and performance optimization.
        </p>
      </section>

      {/* Project list */}
      <section className="pb-16">
        <ul className="mt-4 space-y-4">
          <li className="group rounded-lg border p-4 hover:bg-neutral-50 transition">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-medium group-hover:underline">
                A Doctrine Formed on the Sea
              </span>
              <span className="text-xs text-neutral-500">Oct 2022</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 italic">
              An exploration in structured logic and control flow written in C — a reflection on precision, performance, and design.
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
