// ClientsSection.jsx
export default function ClientsSection() {
  const clients = [
    "Singlife",
    "UOB",
    "Phillip Futures",
    "Thomson X",
    "Lion Global Investors",
    "Vulcan Post",
    "Allianz",
    "greenpacket",
    "Vsmash",
    "Ministry of Education",
    "AIA",
    "Forefront",
    "DBS",
    "OCBC Bank",
    "ntuc",
    "FAZZ",
    "Quick Lane",
    "Yachtly",
  ];

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden  ">
     
      <img
        src="/decor-left.svg"
        alt="Left Decoration"
        className="absolute left-0 top-0 bottom-0 h-auto hidden lg:block pointer-events-none z-0"
      />

      {/* Right SVG */}
      <img
        src="/decor-right.svg"
        alt="Right Decoration"
        className="absolute right-0 top-0 bottom-0 h-auto hidden lg:block pointer-events-none z-0"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <h3 className="text-orange-500 text-sm font-semibold tracking-wide uppercase">
          Our Clients
        </h3>
        <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
          Clients Who Trust Our <span className="text-white">Expertise</span>
          <span className="text-orange-500">.</span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Whether you’re an MNC, SME or startup, looking to make an impact in
          Singapore and beyond, rest assured that we're a web design &
          development company that will give you the right support you need.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-16">
          {clients.map((name, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-20 bg-neutral-900 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              <span className="text-white font-semibold  rounded-lg px-4 py-2">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
