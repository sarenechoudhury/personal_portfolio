import Layout from '../Layout';

export default function WhatPoetry() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-3xl font-bold text-center text-slate-900">What is Poetry To You</h1>

        <div className="flex justify-center">
          <video
            className="w-full max-w-2xl rounded-lg shadow-lg"
            controls
            preload="metadata"
          >
            <source src="/videos/Poetry_To_You.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="text-center text-slate-600 italic">
        A take on What is Poetry to You, the short film by Chilean artist, Cecilia Vicuña. 
        </p>
        <p className="text-center text-slate-600 italic">
        My inspiration is film itself as all of these poems are somewhat related to films and the fantasy ideal. Where Vicuña inserted herself throughout her film by including herself in the interview shots, I think mine will be my perspective about film being a form of poetry and expression due to my background in and passion for film
        </p>
      </div>
    </Layout>
  );
}