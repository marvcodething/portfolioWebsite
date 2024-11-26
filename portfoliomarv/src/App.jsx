import { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./index.css";
import { TypeAnimation } from "react-type-animation";
import { MdEmail, MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";
import roseShot from "./assets/roseShot.png";
import schedShot from "./assets/schedShot.png";
import typeShot from "./assets/typeShot.png";
import portrait from "./assets/portrait.png";
import { FaLink } from "react-icons/fa6";
import twitShot from "./assets/twitShot.png";
import loanPic from "./assets/loanPic.png";
import cnvpShot from "./assets/cnvpShot.png";
import mushieShot from "./assets/mushieShot.png";
import Footer from "./components/Footer";

function App() {
  const { ref: pastProjectsRef, inView: pastProjectsInView } = useInView({
    triggerOnce: false,
  });
  const { ref: currentProjectsRef, inView: currentProjectsInView } = useInView({
    triggerOnce: false,
  });
  const { ref: aboutmeRef, inView: aboutmeInView } = useInView({
    triggerOnce: false,
  });

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 mb-10">
        <h1 className="text-4xl font-bold text-stone-300 mb-4">
          Marvin Romero
        </h1>
        <div className="flex flex-col items-center">
          <div className="text-2xl text-stone-300 inline-block">
            Aspiring&nbsp;
            <TypeAnimation
              className="inline-block"
              sequence={[
                "Engineer",
                1000,
                "Creative",
                1000,
                "Innovator",
                1000,
                "Problem Solver",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://www.github.com/marvcodething"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-stone-300 transform transition-transform duration-200 hover:scale-125 hover:fill-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/in/marv_ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-stone-300 transform transition-transform duration-200 hover:scale-125 hover:fill-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/marvin-romero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-stone-300 transform transition-transform duration-200 hover:scale-125 hover:fill-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a
              href="mailto:marv.a.romero05@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="h-6 w-6 fill-stone-300 transform transition-transform duration-200 hover:scale-125 hover:fill-white" />
            </a>
          </div>
        </div>
      </div>
      <div
        ref={aboutmeRef}
        className={`min-h-screen flex flex-col items-center justify-center mt-20 transition-opacity duration-2000 ${
          aboutmeInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-4xl space-y-4 md:space-y-0 md:space-x-8 mt-14">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            {" "}
            {/* Adjusted alignment */}
            <h1 className="text-4xl font-bold text-stone-300 mb-4">About Me</h1>
            <p className="text-stone-300 mt-4">
              I’m a student at Occidental College, studying Computer Science and
              Media Arts and Culture. I thrive at the intersection of creativity
              and technology, exploring how code can be used as a medium for
              storytelling and cultural expression. I’m passionate about
              crafting experiences that inspire, engage, and empower—whether
              through interactive media, accessible applications, or tools for
              civic engagement. My goal is to create innovative digital works
              that bridge technical precision with artistic vision, amplifying
              voices and ideas that spark change.
            </p>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={portrait}
              alt="Portrait"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center mt-20">
        <div className="flex flex-col items-center justify-center w-full px-10">
          <div
            ref={currentProjectsRef}
            className={`transition-opacity duration-1000 ${
              currentProjectsInView ? "opacity-100" : "opacity-0"
            } flex flex-col items-center justify-center mb-10`}
          >
            <h2 className="text-3xl font-bold text-stone-300 mb-4">
              Current Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
              <div className="card bg-base-100 w-full sm:w-96 shadow-xl">
                {" "}
                {/* Adjusted width */}
                <figure>
                  <img src={roseShot} alt="RosePic" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">ROSE Website</h2>
                  <p>Comprehensive website for the ROSE Union Organization.</p>
                  <div className="card-actions justify-between">
                    <a href="https://www.github.com/marvcodething/rose-website">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-stone-300 transform transition-transform duration-200 hover:scale-125 hover:fill-white justify-start"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">React</div>
                      <div className="badge badge-outline">JavaScript</div>
                      <div className="badge badge-outline">TailwindCSS</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 w-full sm:w-96 shadow-xl">
                <figure>
                  <img src={schedShot} alt="schedPic" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">BioChem Scheduling Website</h2>
                  <p>
                    Scheduling helper for Occidental College, working with a
                    group of 4 students.
                  </p>
                  <div className="card-actions justify-between">
                    <a href="https://github.com/MA0610/SchedulingWebsite">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-stone-300 transform transition-transform duration-200 hover:scale-125 hover:fill-white justify-start"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Python</div>
                      <div className="badge badge-outline">HTML/CSS</div>
                      <div className="badge badge-outline">SQLAlchemy</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 w-full sm:w-96 shadow-xl">
                <figure>
                  <img src={typeShot} alt="typePic" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Real-time Typing Race Game</h2>
                  <p>H2H online game using AWS Websockets.</p>
                  <div className="card-actions justify-between">
                    <a href="https://github.com/marvcodething/Typing-Race-Game">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-stone-300 transform transition-transform duration-200 hover:scale-125 hover:fill-white justify-start"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">React</div>
                      <div className="badge badge-outline">TailwindCSS</div>
                      <div className="badge badge-outline">AWS</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add your cards here */}
            </div>
          </div>
          <div
            ref={pastProjectsRef}
            className={`transition-opacity duration-1000 ${
              pastProjectsInView ? "opacity-100" : "opacity-0"
            } flex flex-col items-center justify-center`}
          >
            <h2 className="text-3xl font-bold text-stone-300 mb-4">
              Past Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl mb-14">
              {/* Add your cards here */}
              <div className="card bg-base-100 w-full sm:w-96 shadow-xl">
                <figure>
                  <img src={twitShot} alt="schedPic" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Twitter/X Clone</h2>
                  <p>
                    WebApp with all main functionality of social media website
                    Twitter/X.
                  </p>
                  <div className="card-actions justify-between">
                    <a href="https://github.com/marvcodething/twitter-clone">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-stone-300 transform transition-transform duration-200 hover:scale-125 hover:fill-white justify-start"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href="https://twitter-clone-lxyw.onrender.com">
                      <FaLink className="h-5 w-5 fill-stone-300 transform transition-transform duration-200 hover:scale-125 hover:fill-white justify-start" />
                    </a>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">MERN</div>
                      <div className="badge badge-outline">TailwindCSS</div>
                      <div className="badge badge-outline">Mongo</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 w-full sm:w-96 shadow-xl">
                <figure>
                  <img src={loanPic} alt="schedPic" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">ML Loan Prediction WebApp</h2>
                  <p>
                    Loan acceptance prediction model wrapped in a Flask API and
                    React frontend.
                  </p>
                  <div className="card-actions justify-between">
                    <a href="https://github.com/marvcodething/loanprediction">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-stone-300 transform transition-transform duration-200 hover:scale-125 hover:fill-white justify-start"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href="https://loanprediction-rxir.onrender.com">
                      <FaLink className="h-5 w-5 fill-stone-300 transform transition-transform duration-200 hover:scale-125 hover:fill-white justify-start" />
                    </a>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Python</div>
                      <div className="badge badge-outline">SciKit Learn</div>
                      <div className="badge badge-outline">Flask</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 w-full sm:w-96 shadow-xl">
                <figure>
                  <img src={mushieShot} alt="schedPic" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Mushie World</h2>
                  <p>
                    Visual Novel demo built in Ren'py with a multidisciplinary
                    team.
                  </p>
                  <div className="card-actions justify-between">
                    <a href="https://github.com/marvcodething/MushieWorld">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-stone-300 transform transition-transform duration-200 hover:scale-125 hover:fill-white justify-start"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href="https://drive.google.com/drive/folders/13qJ0bTIlSbndu2-mBqmzXxgXUnnKIyAR?usp=drive_link">
                      <FaLink className="h-5 w-5 fill-stone-300 transform transition-transform duration-200 hover:scale-125 hover:fill-white justify-start" />
                    </a>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Python</div>
                      <div className="badge badge-outline">RenPy</div>
                      <div className="badge badge-outline">Photoshop</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 w-full sm:w-96 shadow-xl">
                <figure>
                  <img src={cnvpShot} alt="schedPic" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">CNVP Interactive Map Project</h2>
                  <p>
                    Broadband internet accessibility mapping for indigenous
                    populations in California.
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Leaflet.js</div>
                    <div className="badge badge-outline">HTML/CSS</div>
                    <div className="badge badge-outline">JavaScript</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
