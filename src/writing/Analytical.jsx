import { Link } from 'react-router-dom';
import Layout from '../Layout.jsx';
import CardLink from "../CardLink.jsx";

export default function Analytical() {
  return (
    <Layout>
      {/* Page header */}
      <section className="py-10">
        <p className="text-sm/6 text-neutral-600">Portfolio</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          Analytical Essays
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Close readings and theoretical essays connecting literature, philosophy, and film.
        </p>
      </section>

      {/* Essays list */}
      <section className="pb-16">
        <ul className="mt-4 space-y-4">

          <li className="group card transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/writing/kant" className="card-title card-link group-">
                Unfolding Order in Cosmopolitan Progress
              </Link>
              <span className="text-xs text-neutral-500">Dec 2024</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 italic">
              “Idea for a Universal History with a Cosmopolitan Purpose” &amp; 
              “The Major Political Writings of Jean-Jacques Rousseau” — books.
            </p>
          </li>

          <li className="group card transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/writing/rousseau" className="card-title card-link group-">
                From Savage Liberty to Civic Unity
              </Link>
              <span className="text-xs text-neutral-500">Nov 2024</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 italic">
              “The Major Political Writings of Jean-Jacques Rousseau” — book.
            </p>
          </li>

          <li className="group card transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/writing/leviathan" className="card-title card-link group-">
                The Soul of the Commonwealth: Hobbesian Sovereignty as Reason and Nurture
              </Link>
              <span className="text-xs text-neutral-500">Nov 2024</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 italic">
              “Leviathan” — book.
            </p>
          </li>

          <li className="group card transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/writing/whipping" className="card-title card-link group-">
                Memory, Time, and the Psychology of Abuse
              </Link>
              <span className="text-xs text-neutral-500">Nov 2023</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 italic">
              “The Whipping” — poem.
            </p>
          </li>

          <li className="group card transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/writing/catcher" className="card-title card-link group-">
                False Maturity, Exploration, and Conviction in Teenage Authenticity
              </Link>
              <span className="text-xs text-neutral-500">Jan 2023</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 italic">
              “Catcher in the Rye” &amp; “Persepolis” — novels.
            </p>
          </li>

          <li className="group card transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/writing/vertigo" className="card-title card-link group-">
                Screen Memory and Obsession in Achieving Absolution
              </Link>
              <span className="text-xs text-neutral-500">Dec 2022</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 italic">
              “Vertigo” &amp; “Memento” — films.
            </p>
          </li>

          <li className="group card transition">
            <div className="flex items-baseline justify-between gap-4">
              <Link to="/writing/chinatown" className="card-title card-link group-">
                The Disquieting Reality of Chinatown, One Comparable to Our Own
              </Link>
              <span className="text-xs text-neutral-500">Oct 2022</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 italic">
              “Chinatown” — film.
            </p>
          </li>

        </ul>
      </section>
    </Layout>
  );
}

