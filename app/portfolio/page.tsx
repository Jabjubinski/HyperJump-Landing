"use client";

import Image from "next/image";
import Link from "next/link";
import site from "../../public/websites/blacksugar.png";
import site2 from "../../public/websites/la-crosta.png";

const portfolioItems = [
  {
    id: 1,
    title: "Ecommerce",
    category: "eCommerce",
    year: "2026",
    image: site,
    description: "A modern eCommerce platform for clothing goods",
  },
  {
    id: 2,
    title: "Cafe",
    category: "Landing Page",
    year: "2026",
    image: site2,
    description: "Italian restaurant brand identity and web presence",
  },
  {
    id: 3,
    title: "Challenge App",
    category: "Mobile App",
    year: "2026",
    image: site,
    description: "Fitness tracking application with social features",
  },
  {
    id: 4,
    title: "Portfolio Site",
    category: "Web Design",
    year: "2025",
    image: site2,
    description: "Personal portfolio for a creative professional",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-stone-200 pb-6 mb-12">
          <span className="text-stone-500 tracking-widest uppercase text-xs font-sans font-semibold">
            Our Work
          </span>
          <h1 className="tracking-tight text-5xl md:text-7xl  font-light mt-2">
            Portfolio
          </h1>
        </div>

        <div className="mb-16">
          <p className="text-stone-400 text-lg leading-relaxed max-w-2xl">
            A showcase of our recent projects, demonstrating our commitment to
            exceptional design and seamless user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {portfolioItems.map((item) => (
            <Link
              href={`/portfolio/${item.id}`}
              key={item.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl bg-[#1a1a1a]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 text-xs font-mono uppercase tracking-widest">
                    {item.category}
                  </span>
                  <span className="text-stone-600 text-xs font-mono">
                    {item.year}
                  </span>
                </div>
                <h3 className=" text-3xl md:text-4xl font-light group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
