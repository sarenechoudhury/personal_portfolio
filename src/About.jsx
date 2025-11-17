import React from 'react';
import Layout from './Layout';

export default function About() {
  return (
    <Layout>
      <section className="bg-white shadow-md rounded-xl p-6 border">
        <h1 className="text-2xl font-semibold text-sky-700 mb-4">About Me</h1>
        <p>
        My name is Sarene Choudhury, I’m a student at the University of Chicago where I’m majoring in Computer Science and Cinema Studies. Some of my hobbies include reading fantasy books, creative writing, watching and making films, sailing, and coding.
        </p>
      </section>
    </Layout>
  );
}

