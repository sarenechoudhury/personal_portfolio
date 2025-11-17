import { Link } from 'react-router-dom';
import Layout from './Layout';

export default function Writing() {
  return (
    <Layout>
      <section className="space-y-6">
        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
            <Link to="/writing/personal" className="hover:underline">Personal Pieces</Link>
          </h2>
        </div>

        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
            <Link to="/writing/analytical" className="hover:underline">Analytical Essays</Link>
          </h2>
        </div>

        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
            <Link to="/writing/poetry" className="hover:underline">Poetry</Link>
          </h2>
        </div>
      </section>
    </Layout>
  );
}

