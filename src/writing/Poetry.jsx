import Layout from '../Layout';

export default function Poetry() {
  return (
    <Layout>
      {/* Page header */}
      <section className="py-10">
        <p className="text-sm/6 text-neutral-600">Writing</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          Poetry
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          A selection of personal, lyrical, and experimental poems. More pieces coming soon.
        </p>
      </section>

      {/* Placeholder list (expand later) */}
      <section className="pb-16">
        <ul className="mt-4 space-y-4">

          <li className="rounded-lg border p-4 bg-neutral-50 text-neutral-600 text-sm italic">
            Poetry uploads in progress — check back soon.
          </li>

        </ul>
      </section>
    </Layout>
  );
}
