import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function OurPortfolio() {
  const [project, setProjects] = useState([]);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <section className="bg-[#FFF8F5] py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* ───────────── Text Section ───────────── */}
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h1 className="text-lg sm:text-xl text-orange-600 font-semibold mb-1">
              Our Work
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
              Featured Web Design & <br className="hidden sm:block" />
              Development Portfolio <span className="text-orange-500">.</span>
            </p>
          </div>
          <div>
            <Link
              to="/portfolio"
              className="inline-block border border-orange-500 px-4 py-2 rounded-xl text-orange-600 text-base sm:text-lg font-medium transition-all duration-300 hover:bg-orange-50"
            >
              View More
            </Link>
          </div>
        </div>

        {/* ───────────── Portfolio Grid ───────────── */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.map((project) => (
              <Link
                to={project.liveUrl}
                key={project.id}
                className="relative group card w-full bg-white shadow-md rounded-lg overflow-hidden"
              >
                {/* Project Image */}
                <figure>
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-60 sm:h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </figure>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <h2 className="text-white text-lg sm:text-xl font-semibold px-4 text-center">
                    {project.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPortfolio;
