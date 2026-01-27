import Layout from '../Layout.jsx';

export default function Poetry() {
  return (
    <Layout>
      {/* Page header */}
      <section className="py-10">
        <p className="text-sm/6 text-neutral-600">Portfolio</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          Poetry
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          A selection of personal, lyrical, and experimental poems. More pieces coming soon.
        </p>
      </section>

      {/* Placeholder / list */}
      <section className="pb-16">
        <ul className="mt-4 space-y-4">

          <li className="rounded-lg border p-4 hover:bg-neutral-50 transition text-neutral-600 text-sm italic">
            Poetry uploads in progress — check back soon.
          </li>

        </ul>
      </section>
    </Layout>
  );
}

