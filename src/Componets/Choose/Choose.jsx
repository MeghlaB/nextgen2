import React from "react";

function Choose() {
  const gridLayout = [
    {
      image: 'https://jin-design.com/wp-content/uploads/2021/03/icon-choose-affordable.svg',
      title: 'Affordable',
    },
    {
      image: 'https://jin-design.com/wp-content/uploads/2021/03/icon-choose-focus-on-security.svg',
      title: 'A focus on security',
    },
    {
      image: 'https://jin-design.com/wp-content/uploads/2021/03/icon-choose-small-and-lean-team.svg',
      title: 'Small and lean Team',
    },
    {
      image: 'https://jin-design.com/wp-content/uploads/2021/03/icon-choose-best-practice.svg',
      title: 'Design & follow best practice',
    },
    {
      image: 'https://jin-design.com/wp-content/uploads/2021/03/icon-choose-up-to-date-knowledge.svg',
      title: 'Up-to-date knowledge',
    },
    {
      image: 'https://jin-design.com/wp-content/uploads/2021/03/icon-choose-work.svg',
      title: 'Strong work ethic',
    },
  ];

  return (
    <div className="py-16 w-full px-6 md:px-16 bg-white">
      <h1 className="text-amber-600 text-xl md:text-2xl font-semibold px-20">
        WHY CHOOSE NEXTGEN?
      </h1>

      <div className="flex flex-col md:flex-row  py-5 max-w-6xl mx-auto ">
        {/* Left side */}
        <div className="w-full md:w-1/2 p-6 text-gray-900">
          <h2 className="text-5xl font-bold mb-4">
            We'll Build a Website That Works<span className="text-orange-500">.</span>
          </h2>
          <p className="py-5 text-lg">
            We understand how frustrating it can be when your website doesn’t work — whether it’s not bringing in sales, lacking impact or getting hacked. We started this web design company in Singapore to focus on one thing: building and enabling successful websites.
          </p>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 p-6 bg-white text-gray-800">
          <div className="grid grid-cols-3 gap-3">
            {gridLayout.map((grid, index) => (
              <div key={index} className="flex flex-col items-center text-center p-2">
                <img src={grid.image} alt={grid.title} className="w-16 h-16 mb-2" />
                <h1 className="text-lg font-medium">{grid.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
