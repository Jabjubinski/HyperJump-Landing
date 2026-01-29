"use client";

const clients = [
  { name: "Tech Corp", industry: "Technology", year: "2024" },
  { name: "Fashion Co", industry: "Retail", year: "2025" },
  { name: "Finance Group", industry: "Finance", year: "2024" },
  { name: "Creative Studio", industry: "Design", year: "2025" },
  { name: "Food Chain", industry: "Hospitality", year: "2023" },
  { name: "Auto Brand", industry: "Automotive", year: "2026" },
];

const Clients = () => {
  return (
    <div className="min-h-screen bg-[#121212] pt-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-stone-200 pb-6 mb-12">
          <span className="text-stone-500 tracking-widest uppercase text-xs font-sans font-semibold">
            Our Partners
          </span>
          <h1 className="tracking-tight text-5xl md:text-7xl  font-light mt-2">
            Clients
          </h1>
        </div>

        <div className="mb-16">
          <p className="text-stone-400 text-lg leading-relaxed max-w-2xl">
            We've had the privilege of working with forward-thinking companies
            across various industries, helping them bring their digital visions
            to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-8 border border-stone-800 hover:border-stone-600 transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                <span className="text-stone-500 text-xs font-mono uppercase tracking-widest mb-4">
                  {client.industry}
                </span>
                <h3 className=" text-3xl font-light mb-auto group-hover:translate-x-2 transition-transform duration-300">
                  {client.name}
                </h3>
                <span className="text-stone-600 text-sm font-mono mt-6">
                  Since {client.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center py-16 border-t border-stone-800">
          <h2 className=" text-4xl font-light mb-4">Want to work together?</h2>
          <p className="text-stone-400 mb-8">
            Let's discuss how we can help bring your project to life.
          </p>
          <button className="px-8 py-3 bg-white text-black rounded-2xl font-mono text-sm tracking-wide hover:scale-105 transition-all duration-200">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;
