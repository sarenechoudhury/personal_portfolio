import Layout from '../Layout';

export default function Deception() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-3xl font-bold text-center text-slate-900">An Algorithmic Politics of Deception</h1>

        <div className="flex justify-center">
          <video
            className="w-full max-w-2xl rounded-lg shadow-lg"
            controls
            preload="metadata"
          >
            <source src="/videos/AlgPolDec.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="text-center text-slate-600 italic">
        A critique on the manner by which social media has diluted activism, utilizing a short compilation of 'tiktok style' edit videos. 
        </p>
        <p className="text-center text-slate-600 italic">
          While I believe social media activism can be impactful and is highly important, I am commenting on how due to algorithms, followers, and resultant echo chambers that have become a huge issue in media and politics with the age of technology, greatly limit the viewer base of such posts, and rarely change minds if watched by people with opposing ideologies.
        </p>
      </div>
    </Layout>
  );
}