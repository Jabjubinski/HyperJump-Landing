const About = () => {
  return (
    <div className="py-32">
      <div className="w-full px-6 py-20 lg:py-32 lg:px-12 pt-16.5 h-full gap-8 flex justify-center items-center flex-col text-center">
        <h1 className="text-5xl italic border-b border-stone-200 pb-4">
          We don't just write code <br />
          we engineer momentum.
        </h1>

        <p className="text-xl tracking-wide w-full lg:w-1/2 leading-relaxed">
          <span className="text-5xl font-semibold">H</span>yperJump is a
          specialized collective of four—three veteran engineers and one
          visionary designer. We realized that the web doesn't need more
          templates; it needs better engines. We build digital experiences that
          bridge the gap between "it works" and "it's flawless."
        </p>

        <p className="text-xl tracking-wide w-full lg:w-1/2 leading-relaxed">
          By merging technical rigor with aesthetic precision, we help brands
          make the leap from stagnant to scalable. Whether it's a complex SaaS
          architecture or a high-conversion interface, we don't just launch
          projects—we propel them forward.
        </p>

        <div className="mt-4 px-4 py-1 text-xs uppercase tracking-widest font-bold">
          Zero Friction. Maximum Velocity.
        </div>
      </div>
    </div>
  );
};

export default About;
