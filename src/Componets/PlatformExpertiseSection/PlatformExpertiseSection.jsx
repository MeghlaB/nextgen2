const PlatformExpertiseSection = () => {
    const platforms = [
      {
        name: "Figma",
        img: "https://jin-design.com/wp-content/uploads/2021/03/thumbnail-figma.png",
      },
      {
        name: "HTML5",
        img: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      },
      {
        name: "WordPress",
        img: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg",
      },
      {
        name: "Webflow",
        img: "https://jin-design.com/wp-content/uploads/2021/03/thumbnail-webflow.png",
      },
      {
        name: "Elementor",
        img: "https://jin-design.com/wp-content/uploads/2021/03/thumbnail-elementor.png",
      },
      {
        name: "More",
        img: null,
        text: "MORE",
      },
    ];
  
    return (
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-orange-500 font-semibold uppercase text-sm mb-2">
            Platforms We Specialise In
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Experts in Your Platforms, and More
            <span className="text-orange-500">.</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            From Figma to WordPress development, our web design agency specialises
            in these platforms to provide the best service possible.
          </p>
  
          {/* Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-[#FFF6F1] p-5 rounded-xl w-24 h-24 flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
              >
                {platform.img ? (
                  <img
                    src={platform.img}
                    alt={platform.name}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <span className="text-orange-500 font-semibold text-sm">
                    {platform.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PlatformExpertiseSection;
  