const Hero = () => {
  return (
    <div className="w-full min-h-[90vh] flex items-center justify-center bg-[#1F2A28] px-4 overflow-hidden">
      
      <div className="max-w-6xl text-center relative mt-10">

        {/* glow effects */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#C9996B]/20 blur-3xl rounded-full"></div>

        {/* heading */}
        <h1 className="relative text-4xl md:text-7xl font-black leading-tight text-[#EDE9E6] tracking-tight">
          Welcome to <br />
          <span className="text-[#C9996B]">
            Qidwai-Hour
          </span>
        </h1>

        {/* sub heading */}
        <p className="relative mt-8 text-lg md:text-2xl text-[#d6d0cc] max-w-3xl mx-auto leading-relaxed font-light">
          A personal space where ideas become stories.  
          Dive into thoughtful articles, modern insights, and meaningful writing
          crafted to inspire curious minds.
        </p>

        {/* button */}
        <div className="relative mt-10 flex justify-center">
          <button className="px-10 py-4 rounded-2xl bg-[#C9996B] text-[#5C766D] text-lg font-bold shadow-2xl hover:scale-105 hover:bg-[#EDE9E6] transition-all duration-300">
            Explore Articles
          </button>
        </div>

        {/* feature cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* card 1 */}
          <div className="group p-7 rounded-[2rem] bg-[#EDE9E6]/5 border border-[#C9996B]/20 backdrop-blur-lg hover:border-[#C9996B]/50 hover:-translate-y-2 transition-all duration-300 shadow-xl">
            
            <div className="text-5xl mb-5">
              ✍️
            </div>

            <h3 className="text-2xl font-bold text-[#C9996B]">
              Personal Writing
            </h3>

            <p className="mt-4 text-[#d6d0cc] leading-relaxed text-sm md:text-base">
              Carefully written articles sharing ideas, experiences, opinions,
              and knowledge in a clean and engaging format.
            </p>
          </div>

          {/* card 2 */}
          <div className="group p-7 rounded-[2rem] bg-[#EDE9E6]/5 border border-[#C9996B]/20 backdrop-blur-lg hover:border-[#C9996B]/50 hover:-translate-y-2 transition-all duration-300 shadow-xl">
            
            <div className="text-5xl mb-5">
              📚
            </div>

            <h3 className="text-2xl font-bold text-[#C9996B]">
              Thoughtful Reading
            </h3>

            <p className="mt-4 text-[#d6d0cc] leading-relaxed text-sm md:text-base">
              Explore articles designed for readers who enjoy meaningful
              content, modern ideas, and creative perspectives.
            </p>
          </div>

          {/* card 3 */}
          <div className="group p-7 rounded-[2rem] bg-[#EDE9E6]/5 border border-[#C9996B]/20 backdrop-blur-lg hover:border-[#C9996B]/50 hover:-translate-y-2 transition-all duration-300 shadow-xl">
            
            <div className="text-5xl mb-5">
              🌙
            </div>

            <h3 className="text-2xl font-bold text-[#C9996B]">
              Elegant Experience
            </h3>

            <p className="mt-4 text-[#d6d0cc] leading-relaxed text-sm md:text-base">
              Built with a calm aesthetic, smooth interactions, and a modern
              reading experience that matches the Qidwai-Hour identity.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;