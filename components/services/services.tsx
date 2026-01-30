"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies and best practices.",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Implementation",
      "CMS Integration",
    ],
  },
  {
    number: "02",
    title: "Brand Identity",
    description:
      "Comprehensive brand strategy and visual identity design to make your business stand out.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Typography Selection",
      "Color Systems",
    ],
  },
  {
    number: "03",
    title: "eCommerce Solutions",
    description:
      "Full-featured online stores designed to convert visitors into customers.",
    features: [
      "Product Catalogs",
      "Payment Integration",
      "Inventory Management",
      "Analytics Setup",
    ],
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "User-centered design processes that create intuitive and engaging digital experiences.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-stone-200 pb-6 mb-12">
          <span className="text-stone-500 tracking-widest uppercase text-xs font-sans font-semibold">
            What We Do
          </span>
          <h1 className="tracking-tight text-5xl md:text-7xl text-white font-light mt-2">
            Services
          </h1>
        </div>

        <div className="mb-16">
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            We offer a comprehensive range of digital services to help your
            business thrive in the modern landscape.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-b border-stone-800 pb-12 last:border-none group"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <span className="text-stone-500 text-sm font-mono mb-4 block">
                    {service.number}
                  </span>
                  <h2 className="text-white text-4xl md:text-5xl font-light mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h2>
                </div>

                <div className="md:w-2/3">
                  <p className="text-white text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-[#c0c0c0]"
                      >
                        <span className="w-1.5 h-1.5 bg-stone-500 rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#131313] rounded-2xl p-12 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-light mb-4">
            Need a custom solution?
          </h2>
          <p className="text-[#c0c0c0] mb-8 max-w-xl mx-auto">
            Every project is unique. Let's discuss your specific needs and craft
            a tailored approach.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 text-[#191919] bg-white rounded-2xl text-sm tracking-wide hover:scale-105 transition-all duration-200">
              Start a Conversation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
