import React from "react";

function Choose() {
  const gridLayout = [
    {
      image: "https://jin-design.com/wp-content/uploads/2021/03/icon-choose-affordable.svg",
      title: "Affordable",
    },
    {
      image: "https://jin-design.com/wp-content/uploads/2021/03/icon-choose-focus-on-security.svg",
      title: "A focus on security",
    },
    {
      image: "https://jin-design.com/wp-content/uploads/2021/03/icon-choose-small-and-lean-team.svg",
      title: "Small and lean Team",
    },
    {
      image: "https://jin-design.com/wp-content/uploads/2021/03/icon-choose-best-practice.svg",
      title: "Design & follow best practice",
    },
    {
      image: "https://jin-design.com/wp-content/uploads/2021/03/icon-choose-up-to-date-knowledge.svg",
      title: "Up-to-date knowledge",
    },
    {
      image: "https://jin-design.com/wp-content/uploads/2021/03/icon-choose-work.svg",
      title: "Strong work ethic",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white w-full">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-amber-600 text-base sm:text-lg md:text-xl font-semibold mb-6">
          WHY CHOOSE NEXTGEN?
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side */}
          <div className="w-full md:w-1/2 text-gray-900">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              We'll Build a Website That Works<span className="text-orange-500">.</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              We understand how frustrating it can be when your website doesn’t work —
              whether it’s not bringing in sales, lacking impact or getting hacked.
              We started this web design company in Singapore to focus on one thing:
              building and enabling successful websites.
            </p>
          </div>

          {/* Right Side - Grid */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {gridLayout.map((grid, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-lg shadow hover:shadow-md transition duration-300"
                >
                  <img
                    src={grid.image}
                    alt={grid.title}
                    className="w-14 h-14 mb-2 object-contain"
                  />
                  <h3 className="text-sm font-medium text-gray-800">{grid.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;
