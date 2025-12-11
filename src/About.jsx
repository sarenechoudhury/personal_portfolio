import React from 'react';
import Layout from './Layout';

export default function About() {
  return (
    <Layout>
      {/* Page header */}
      <section className="py-10">
        <p className="text-sm/6 text-neutral-600">Portfolio</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          About Me
        </h1>
      </section>

      {/* Bio */}
      <section className="pb-16 max-w-2xl space-y-4">
        <p className="text-neutral-700">
          I’m Sarene Choudhury, a 3rd year student at the University of Chicago
          majoring in Computer Science and Cinema Studies.
          I’m interested in the intersection of machine learning, storytelling, and
          visual media; exploring how computational tools can help us understand or
          create narrative.
        </p>

        <p className="text-neutral-700">
          My academic and personal work bridges both fields: I build
          web and ML projects that analyze or generate creative content,
          and I write film essays on narrative theory, visual form, and technology’s
          role in shaping cinema.
        </p>

        <p className="text-neutral-700">
          Beyond academics, I love drawing, painting, fantasy novels,
          creative writing, tennis, sailing,
          and exploring new forms of digital storytelling.
        </p>
      </section>
    </Layout>
  );
}


