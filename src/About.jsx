import React from 'react';
import Layout from './Layout.jsx';

export default function About() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Layout>
      {/* Page header */}
      <section className="py-10">
        <p className="text-sm/6 text-neutral-600">Portfolio</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          About Me
        </h1>
      </section>

      <section className="pb-20 max-w-3xl mx-auto space-y-10">
        {/* Intro */}
        <section className="space-y-3">
          <p className="text-neutral-700">
            My name is <strong>Sarene Choudhury</strong>. I’m a student at the
            University of Chicago majoring in Computer Science and Cinema Studies.
            Some of my hobbies include reading fantasy books, creative writing,
            watching and making films, sailing, and coding.
          </p>

          {/* In-page navigation */}
          <nav className="mt-4 flex flex-wrap gap-3 text-sm text-neutral-700">
            <button
              type="button"
              onClick={() => scrollToSection('coding-history-and-coursework')}
              className="underline underline-offset-2"
            >
              Coding History &amp; Coursework
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('work-experience')}
              className="underline underline-offset-2"
            >
              Work Experience
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('filmmaking')}
              className="underline underline-offset-2"
            >
              Filmmaking
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('books')}
              className="underline underline-offset-2"
            >
              Books
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('film-and-tv')}
              className="underline underline-offset-2"
            >
              Film &amp; TV
            </button>
          </nav>
        </section>


        {/* Coding History and Coursework */}
        <section
          id="coding-history-and-coursework"
          className="pt-8 border-t border-neutral-200 space-y-5"
        >
          <header>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Background
            </p>
            <h2 className="mt-1 text-2xl font-semibold">
              Coding History &amp; Coursework
            </h2>
          </header>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Summer Courses</h3>
              <p className="text-neutral-700">
                I was first introduced to computer science at age 9 when I attended an
                IDTech camp and learned Scratch. I loved the experience and
                consequently returned for five more summers, until I was old enough to
                apply for pre-college courses, listed below:
              </p>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold">
                    Building and Programming an LED Light Cube with Arduino — Brown University,
                    Providence, RI (Summer 2019)
                  </h4>
                  <ul className="mt-1 list-disc pl-6 text-neutral-700">
                    <li>Languages/Software used: Arduino</li>
                    <li>Used 64 LEDs and a PCB board to build cube; programmed the LEDs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Introduction to Data Science B: Visualization and Modeling — Stanford University,
                    Palo Alto, CA (Fall 2020)
                  </h4>
                  <ul className="mt-1 list-disc pl-6 text-neutral-700">
                    <li>Languages/Software used: R, RStudio, Shiny</li>
                    <li>Data analysis, data cleaning, model creation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Technology and the 2020 Election — Stanford University, Palo Alto, CA (Fall 2020)
                  </h4>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Entrepreneurship and Innovation: Changing the World via Venture Creation —
                    Columbia University, New York, NY (Spring 2020)
                  </h4>
                  <ul className="mt-1 list-disc pl-6 text-neutral-700">
                    <li>Venture creation, customer research, marketing mix/funnel estimation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Introduction to Computer-Aided Design and 3D Printing — Brown University,
                    Providence, RI (Summer 2020)
                  </h4>
                  <ul className="mt-1 list-disc pl-6 text-neutral-700">
                    <li>Languages/Software used: Autodesk 360</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Introduction to Investment Portfolio Management — Columbia University, New York,
                    NY (Summer 2021)
                  </h4>
                  <ul className="mt-1 list-disc pl-6 text-neutral-700">
                    <li>Languages/Software used: StockTrack, Excel</li>
                    <li>Portfolio management, market valuation report</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Introduction to Quantum Computing — Brown University, Providence, RI (Summer 2022)
                  </h4>
                  <ul className="mt-1 list-disc pl-6 text-neutral-700">
                    <li>Languages/Software used: Python</li>
                    <li>Quantum computing, IBM tutorials</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">High School Courses</h3>
              <p className="text-neutral-700">
                The high school I attended, Horace Mann, offered a number of computer science
                courses, of which I took as many as could fit into my schedule over the course of
                four years:
              </p>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold">
                    Computer Science I — half credit (Summer 2019)
                  </h4>
                  <ul className="mt-1 list-disc pl-6 text-neutral-700">
                    <li>Languages/Software used: Arduino</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Computer Science II — half credit (2019–2020)
                  </h4>
                  <ul className="mt-1 list-disc pl-6 text-neutral-700">
                    <li>Languages/Software used: Python</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Mobile App Development — half credit (2020–2021)
                  </h4>
                  <ul className="mt-1 list-disc pl-6 text-neutral-700">
                    <li>Languages/Software used: Swift, InVision</li>
                    <li>
                      Prototyping and pitching an app idea, UX design and research,
                      design thinking principles
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Theoretical Computer Science — half credit (2021–2022)
                  </h4>
                  <ul className="mt-1 list-disc pl-6 text-neutral-700">
                    <li>Languages/Software used: Scala, Python, LaTeX</li>
                    <li>
                      Mathematical proofs (pure logic, graph theory, automata theory),
                      BFS/DFS, Huffman coding tree
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Art of Data — full credit (2021–2022)
                  </h4>
                  <ul className="mt-1 list-disc pl-6 text-neutral-700">
                    <li>Languages/Software used: Python</li>
                    <li>Data analysis, data cleaning</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Software Engineering — half credit (2022–2023)
                  </h4>
                  <ul className="mt-1 list-disc pl-6 text-neutral-700">
                    <li>
                      Languages/Software used: Python, HTML, Git, SQL/SQLite, CSS, JavaScript,
                      Vue, PHP
                    </li>
                    <li>Web application creation, front-end and back-end design</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Computer Science Seminar — full credit (2022–2023)
                  </h4>
                  <ul className="mt-1 list-disc pl-6 text-neutral-700">
                    <li>Languages/Software used: Python, Unity, JavaScript, C#</li>
                    <li>Game development, shell scripting environments, hacking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section
          id="work-experience"
          className="pt-8 border-t border-neutral-200 space-y-5"
        >
          <header>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Experience
            </p>
            <h2 className="mt-1 text-2xl font-semibold">Work Experience</h2>
          </header>

          <div className="space-y-6 text-sm">
            <div>
              <h3 className="text-base font-semibold">
                Quantbot Technologies — Quant Research Intern (Summer 2024)
              </h3>
              <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1">
                <li>Built ML models using Keras, TensorFlow, and LightGBM.</li>
                <li>Tested company and built-in functions to upgrade from Python 3.9 to 3.11.</li>
                <li>Researched and tested benefits of quantized gradients in LightGBM models.</li>
                <li>
                  Created DeepChecks API suites for automated model and data evaluations in an
                  online setting; configurable script sent success message or list of failed
                  checks to company Slack.
                </li>
                <li>
                  Explored feature generation using OptionsTAQ data for equity-returns prediction,
                  as well as intraday data for determining the sway of the top 10 companies per
                  sector’s performance on the rest of the corresponding sectors.
                </li>
                <li>
                  Experimented with neural network implementation concerning layer types,
                  normalization, quantization, early stopping, augmented boosting, and
                  combination with LightGBM models.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold">
                Breakwater Yacht Club — Sailing Instructor (Summer 2021 &amp; 2022)
              </h3>
              <p className="mt-1 text-neutral-700">
                <a
                  href="https://sarenechoudhury.github.io/aboutme/%27/files/commandments%27"
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Essay about this experience
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold">SSAT and Math Tutor (2021–2022)</h3>
              <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1">
                <li>Middle school–level student.</li>
                <li>
                  Created math homework sheets based on topics the student was studying in class
                  at a more advanced level, as well as topics for the student’s next year of school.
                </li>
                <li>
                  Met on Zoom to go over homework problems and either worked through challenging
                  questions or introduced new topics.
                </li>
                <li>
                  Found previous SSAT tests and assigned portions for homework; created sheets for
                  topics the student struggled with.
                </li>
                <li>
                  Met on Zoom to grade test portions, review missed problems, and teach new topics
                  using additional practice sheets.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Filmmaking */}
        <section
          id="filmmaking"
          className="pt-8 border-t border-neutral-200 space-y-3"
        >
          <header>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Practice
            </p>
            <h2 className="mt-1 text-2xl font-semibold">Filmmaking</h2>
          </header>
          {/* Still intentionally blank for now */}
        </section>

        {/* Books */}
        <section
          id="books"
          className="pt-8 border-t border-neutral-200 space-y-5"
        >
          <header>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Favorites
            </p>
            <h2 className="mt-1 text-2xl font-semibold">Books</h2>
          </header>

          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold">Favourite Books</h3>
              <ol className="mt-2 list-decimal pl-6 text-neutral-700 space-y-1">
                <li>Red Rising Series (Pierce Brown)</li>
                <li>How to Train Your Dragon Series (Cressida Cowell)</li>
                <li>Throne of Glass Series (Sarah J. Maas)</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold">
                Ten Books I’d Use for Someone to Get to Know Me
              </h3>
              <ol className="mt-2 list-decimal pl-6 text-neutral-700 space-y-1">
                <li>How to Train Your Dragon (Cressida Cowell)</li>
                <li>Red Rising (Pierce Brown)</li>
                <li>We’ve Always Lived in the Castle (Shirley Jackson)</li>
                <li>Throne of Glass (Sarah J. Maas)</li>
                <li>Percy Jackson (Rick Riordan)</li>
                <li>Scythe (Neal Shusterman)</li>
                <li>Nevernight (Jay Kristoff)</li>
                <li>Pennyroyal Academy (M.A. Larson)</li>
                <li>The Penderwicks (Jeanne Birdsall)</li>
                <li>The Boxcar Children (Gertrude Chandler Warner)</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Film and TV */}
        <section
          id="film-and-tv"
          className="pt-8 border-t border-neutral-200 space-y-5"
        >
          <header>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Favorites
            </p>
            <h2 className="mt-1 text-2xl font-semibold">Film &amp; TV</h2>
          </header>

          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold">Favourite Films</h3>
              <ol className="mt-2 list-decimal pl-6 text-neutral-700 space-y-1">
                <li>Some Like it Hot (Billy Wilder, 1959)</li>
                <li>Chinatown (Roman Polanski, 1974)</li>
                <li>The Dark Knight Rises (Christopher Nolan, 2012)</li>
                <li>Spider-Man: Across the Spider-Verse (2023)</li>
                <li>Lord of the Rings Trilogy (Peter Jackson)</li>
                <li>Triangle of Sadness (Ruben Östlund, 2022)</li>
                <li>Monty Python’s Life of Brian (Terry Jones, 1979)</li>
                <li>Inglourious Basterds (Quentin Tarantino, 2009)</li>
                <li>Rebel Without a Cause (Nicholas Ray, 1955)</li>
                <li>Silence of the Lambs (Jonathan Demme, 1991)</li>
                <li>The Emperor’s New Groove (Mark Dindal, 2000)</li>
                <li>Monty Python and the Holy Grail (Terry Jones, 1975)</li>
                <li>The Lego Batman Movie (Chris McKay, 2017)</li>
                <li>Us (Jordan Peele, 2019)</li>
                <li>Chicken Run (2000)</li>
                <li>Scream (Wes Craven, 1996)</li>
                <li>Vertigo (Alfred Hitchcock, 1958)</li>
                <li>The Wolf of Wall Street (Martin Scorsese, 2013)</li>
                <li>Flightplan (Robert Schwentke, 2005)</li>
                <li>Fight Club (David Fincher, 1999)</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold">Favourite TV Shows</h3>
              <ol className="mt-2 list-decimal pl-6 text-neutral-700 space-y-1">
                <li>Game of Thrones</li>
                <li>The Walking Dead</li>
                <li>Hunter x Hunter</li>
                <li>The Boys</li>
                <li>Demonslayer</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold">Favourite TV and Film Characters</h3>
              <ol className="mt-2 list-decimal pl-6 text-neutral-700 space-y-1">
                <li>Tony Stark (Iron Man)</li>
                <li>Rick Grimes (The Walking Dead)</li>
                <li>Lucille Bluth (Arrested Development)</li>
                <li>Sue Sylvester (Glee)</li>
                <li>Tywin Lannister (Game of Thrones)</li>
                <li>Killua Zoldyck (Hunter x Hunter)</li>
                <li>Gina Linetti (Brooklyn 99)</li>
                <li>Gob Bluth (Arrested Development)</li>
                <li>Captain Jack Sparrow (Pirates of the Caribbean)</li>
                <li>Aoi Todo (Jujutsu Kaisen)</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Footer-style links */}
        <section className="pt-8 border-t border-neutral-200 space-y-2 text-sm text-neutral-700">
          <ul className="flex flex-wrap gap-4">
            <li>
              <a
                href="mailto:sareneac@icloud.com"
                className="underline underline-offset-2"
              >
                Email me
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sarenechoudhury"
                className="underline underline-offset-2"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/sarene-choudhury-a6b6a929b"
                className="underline underline-offset-2"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <p className="text-neutral-500">Sarene Choudhury • 2025</p>
        </section>
      </section>
    </Layout>
  );
}





