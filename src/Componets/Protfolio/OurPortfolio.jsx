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
    <section className="bg-[#FFF8F5] py-20">
      <div className="container mx-auto">
        {/* text section */}
        <div className="max-w-5xl mx-auto flex justify-between">
          <div>
            <h1 className="text-xl text-orange-600">Our Work</h1>
            <p className="text-4xl">
              Featured Web Design & <br />
              Development Portfolio <span className="text-orange-500">.</span>
            </p>
          </div>
          <div>
            <div className="border border-orange-500 px-4 py-2 rounded-xl">
              <Link
                to="/portfolio"
                className="text-xl text-orange-600 transition-all duration-300"
              >
                View More
              </Link>
            </div>
          </div>
        </div>

        {/* portfolio grid */}
        <div className="max-w-5xl mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            {project.map((project) => (
              <Link
                to={project.liveUrl} 
                key={project.id}
                className="relative group card w-full bg-base-100 shadow-sm overflow-hidden"
              >
                <figure>
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </figure>
                {/* Hover overlay */}
                <div className="absolute inset-0  flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <h2 className="text-orange-600 text-xl font-semibold">
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
