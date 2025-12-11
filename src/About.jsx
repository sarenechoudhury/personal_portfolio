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

      <section className="pb-16 max-w-3xl space-y-8">
        {/* Intro */}
        <p className="text-neutral-700">
          My name is Sarene Choudhury, I’m a student at the University of Chicago
          where I’m majoring in Computer Science and Cinema Studies. Some of my
          hobbies include reading fantasy books, creative writing, watching and
          making films, sailing, and coding.
        </p>

        {/* Divider */}
        <hr className="border-neutral-200" />

        {/* In-page navigation (same sections as previous site) */}
        <nav className="flex flex-wrap gap-3 text-sm text-neutral-700">
          <a href="#coding-history-and-coursework" className="underline underline-offset-2">
            Coding History and Coursework
          </a>
          <a href="#work-experience" className="underline underline-offset-2">
            Work Experience
          </a>
          <a href="#filmmaking" className="underline underline-offset-2">
            Filmmaking
          </a>
          <a href="#books" className="underline underline-offset-2">
            Books
          </a>
          <a href="#film-and-tv" className="underline underline-offset-2">
            Film and TV
          </a>
        </nav>

        <hr className="border-neutral-200" />

        {/* Coding History and Coursework */}
        <section id="coding-history-and-coursework" className="space-y-4">
          <h2 className="text-xl font-semibold">Coding History and Coursework</h2>

          <h3 className="text-lg font-semibold mt-4">Summer Courses</h3>
          <p className="text-neutral-700">
            I was first introduced to computer science at age 9 when I attended an IDTech
            camp and learned Scratch. I loved the experience and consequently returned for
            five more summers, until I was old enough to apply for pre-college courses,
            listed below:
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="font-medium">
                Building and Programming an LED Light Cube with Arduino, Brown University,
                Providence, RI, Summer 2019
              </h4>
              <ul className="list-disc pl-6 text-neutral-700">
                <li>Languages/Software used: Arduino</li>
                <li>Coursework: Used 64 LEDs and a PCB board to build cube, programmed the LEDs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">
                Introduction to Data Science B: Visualization and Modeling, Stanford University,
                Palo Alto, CA, Fall 2020
              </h4>
              <ul className="list-disc pl-6 text-neutral-700">
                <li>Languages/Software used: R, RStudio, Shiny</li>
                <li>Coursework: Data analysis, Data cleaning, Model creation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">
                Technology and the 2020 Election, Stanford University, Palo Alto, CA, Fall 2020
              </h4>
            </div>

            <div>
              <h4 className="font-medium">
                Entrepreneurship and Innovation: Changing the World via Venture Creation,
                Columbia University, New York, NY, Spring 2020
              </h4>
              <ul className="list-disc pl-6 text-neutral-700">
                <li>Coursework: Venture Creation, Customer Research, Marketing Mix/Funnel Estimation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">
                Introduction to Computer-Aided Design and 3D Printing, Brown University,
                Providence, RI, Summer 2020
              </h4>
              <ul className="list-disc pl-6 text-neutral-700">
                <li>Languages/Software used: Autodesk 360</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">
                Introduction to Investment Portfolio Management, Columbia University, New York,
                NY, Summer 2021
              </h4>
              <ul className="list-disc pl-6 text-neutral-700">
                <li>Languages/Software used: StockTrack, Excel</li>
                <li>Coursework: Portfolio management, Market valuation report</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">
                Introduction to Quantum Computing, Brown University, Providence, RI, Summer 2022
              </h4>
              <ul className="list-disc pl-6 text-neutral-700">
                <li>Languages/Software used: Python</li>
                <li>Coursework: Quantum computing, IBM tutorials</li>
              </ul>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-6">Highschool Courses</h3>
          <p className="text-neutral-700">
            The highschool I attended, Horace Mann, also offered a number of computer science
            courses, of which I took as many as could fit into my schedule over the course of
            four years:
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="font-medium">
                Computer Science I, half-credit, Summer 2019
              </h4>
              <ul className="list-disc pl-6 text-neutral-700">
                <li>Languages/Software used: Arduino</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">
                Computer Science II, half-credit, 2019-2020
              </h4>
              <ul className="list-disc pl-6 text-neutral-700">
                <li>Languages/Software used: Python</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">
                Mobile App Development, half-credit, 2020-2021
              </h4>
              <ul className="list-disc pl-6 text-neutral-700">
                <li>Languages/Software used: Swift, InVision</li>
                <li>
                  Coursework: Prototyping and pitching an app idea, UX design and research,
                  Design Thinking Principles
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">
                Theoretical Computer Science, half-credit, 2021-2022
              </h4>
              <ul className="list-disc pl-6 text-neutral-700">
                <li>Languages/Software used: Scala, Python, LaTex</li>
                <li>
                  Coursework: Mathematical proofs (pure logic, graph theory, automata theory),
                  BFS/DFS, Huffman Coding Tree
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">
                Art of Data, full-credit, 2021-2022
              </h4>
              <ul className="list-disc pl-6 text-neutral-700">
                <li>Languages/Software used: Python</li>
                <li>Coursework: Data analysis, Data cleaning</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">
                Software Engineering, half-credit, 2022-2023
              </h4>
              <ul className="list-disc pl-6 text-neutral-700">
                <li>Languages/Software used: Python, HTML, Git, SQL/SQLite, CSS, JavaScript, Vue, PHP</li>
                <li>Coursework: Web application creation, Front-end and Back-end design</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">
                Computer Science Seminar, full-credit, 2022-2023
              </h4>
              <ul className="list-disc pl-6 text-neutral-700">
                <li>Languages/Software used: Python, Unity, JavaScript, C#</li>
                <li>
                  Coursework: Game development, Shell scripting environments, Hacking
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-neutral-200" />

        {/* Work Experience */}
        <section id="work-experience" className="space-y-4">
          <h2 className="text-xl font-semibold">Work Experience</h2>

          <div className="space-y-3">
            <div>
              <h3 className="font-medium">
                Quantbot Technologies, Quant Research Intern, Summer 2024
              </h3>
              <ul className="list-disc pl-6 text-neutral-700 space-y-1">
                <li>Built ML models using Keras, Tensorflow, and LightGBM.</li>
                <li>Tested company and built-in functions to upgrade from Python 3.9 to 3.11.</li>
                <li>Researched and tested benefits of quantized gradients in LightGBM models.</li>
                <li>
                  Created DeepChecks API suites for automated model and data evaluations in an
                  online setting, configurable script sent success message or list of failed
                  checks to company slack.
                </li>
                <li>
                  Explored feature generation using OptionsTAQ data for equity-returns
                  prediction, as well as intraday data for determining the sway of the top 10
                  companies per sector’s performance on the rest of the corresponding sectors.
                </li>
                <li>
                  Experimented with neural network implementation concerning layer types,
                  normalization, quantization, early stopping, augmented boosting, and
                  combination with LightGBM models.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">
                Breakwater Yacht Club, Sailing Instructor, Summer 2021 &amp; 2022
              </h3>
              <p className="text-neutral-700">
                <a
                  href="https://sarenechoudhury.github.io/aboutme/%27/files/commandments%27"
                  className="underline underline-offset-2"
                >
                  Essay about this experience
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-medium">SSAT and Math Tutor, 2021-2022</h3>
              <ul className="list-disc pl-6 text-neutral-700 space-y-1">
                <li>Middle School level student.</li>
                <li>
                  Created math homework sheets based on topics that student was studying in
                  class at a more advanced level, as well as topics to be covered in the
                  student’s next year of schooling.
                </li>
                <li>
                  Met on zoom to go over homework problems, and either worked through problems
                  that the student had struggled with in the homework, or introduced a new
                  topic if the student was comfortable with previously covered material
                </li>
                <li>
                  Found tests for the SSAT from previous years and assigned portions of it
                  for homework, and made homework sheets for topics the student struggled with
                </li>
                <li>
                  Met on zoom to grade the SSAT test portions, go over problems that were
                  missed by the student, and instruct the student on any topics they didn’t
                  know and go through new practice sheets together
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-neutral-200" />

        {/* Filmmaking */}
        <section id="filmmaking" className="space-y-4">
          <h2 className="text-xl font-semibold">Filmmaking</h2>
          {/* Original page has this as a header + divider but no body text yet */}
        </section>

        <hr className="border-neutral-200" />

        {/* Books */}
        <section id="books" className="space-y-4">
          <h2 className="text-xl font-semibold">Books</h2>

          <div>
            <h3 className="font-medium">Favourite Books</h3>
            <ol className="list-decimal pl-6 text-neutral-700 space-y-1">
              <li>Red Rising Series (Pierce Brown)</li>
              <li>How to Train Your Dragon Series (Cressida Cowell)</li>
              <li>Throne of Glass Series (Sarah J. Maas)</li>
            </ol>
          </div>

          <div>
            <h3 className="font-medium">
              Ten Books that I Would Use for Someone to Get to Know Me
            </h3>
            <ol className="list-decimal pl-6 text-neutral-700 space-y-1">
              <li>How to Train Your Dragon (Cressida Cowell)</li>
              <li>Red Rising (Pierce Brown)</li>
              <li>We’ve Always Lived in the Castle (Shirley Jackson)</li>
              <li>Throne of Glass (Sarah J. Maas)</li>
              <li>Percy Jackson (Rick Riordan)</li>
              <li>Scythe (Neal Shusterman)</li>
              <li>Nevernight (Jay Kristoff)</li>
              <li>Pennyroyal Academy (M.A. Larson)</li>
              <li>The Penderwicks (Jeanne Birdsall)</li>
              <li>The Boxcar Children (Gertude Chandler Warner)</li>
            </ol>
          </div>
        </section>

        <hr className="border-neutral-200" />

        {/* Film and TV */}
        <section id="film-and-tv" className="space-y-4">
          <h2 className="text-xl font-semibold">Film and TV</h2>

          <div>
            <h3 className="font-medium">Favourite Films</h3>
            <ol className="list-decimal pl-6 text-neutral-700 space-y-1">
              <li>Some Like it Hot (Billy Wilder, 1959)</li>
              <li>Chinatown (Roman Polanski, 1974)</li>
              <li>The Dark Knight Rises (Christopher Nolan, 2012)</li>
              <li>Spider-Man: Across the Spider-Verse (2023)</li>
              <li>Lord of the Rings Trilogy (Peter Jackson)</li>
              <li>Triangle of Sadness (Ruben Östlund, 2022)</li>
              <li>Monty Python’s Life of Brian (Terry Jones, 1979)</li>
              <li>Inglorious Basterds (Quentin Tarantino, 2009)</li>
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
            <h3 className="font-medium">Favourite TV Shows</h3>
            <ol className="list-decimal pl-6 text-neutral-700 space-y-1">
              <li>Game of Thrones</li>
              <li>The Walking Dead</li>
              <li>Hunter x Hunter</li>
              <li>The Boys</li>
              <li>Demonslayer</li>
            </ol>
          </div>

          <div>
            <h3 className="font-medium">Favourite TV and Film Characters</h3>
            <ol className="list-decimal pl-6 text-neutral-700 space-y-1">
              <li>Tony Stark (Iron Man)</li>
              <li>Rick Grimes (The Walking Dead)</li>
              <li>Lucille Bluth (Arrested Development)</li>
              <li>Sue Sylvester (Glee)</li>
              <li>Tywin Lannister (Game of Thrones)</li>
              <li>Killua Zoldyck (Hunter x Hunter)</li>
              <li>Gina Linetti (Brooklyn 99)</li>
              <li>Gob Bluth (Arrested Development)</li>
              <li>Captain Jack Sparrow (Pirates of the Caribbean)</li>
              <li>Aoi Todo (Jujistu Kaisen)</li>
            </ol>
          </div>
        </section>

        <hr className="border-neutral-200" />

        {/* Footer-style links from old page */}
        <section className="space-y-2 text-sm text-neutral-700">
          <ul className="flex flex-wrap gap-4">
            <li>Email me</li>
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
          <p>Sarene Choudhury • 2025</p>
        </section>
      </section>
    </Layout>
  );
}



