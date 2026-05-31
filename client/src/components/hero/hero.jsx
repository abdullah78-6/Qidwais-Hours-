const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#F5F2EE] px-6">
      
      
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C9996B]/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        
        <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full border border-[#C9996B]/30 bg-white/50 backdrop-blur-sm">
          <span className="text-sm font-medium text-[#5C766D]">
            Personal Blog & Modern Insights
          </span>
        </div>

        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#1F2A28] leading-[1.05]">
          Welcome to
          <span className="block text-[#C9996B]">
            Qidwai-Hour
          </span>
        </h1>

        
        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-[#5C766D] leading-relaxed">
          A personal space where ideas become stories. Discover thoughtful
          articles, modern perspectives, and meaningful writing crafted for
          curious minds.
        </p>

        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 rounded-xl bg-[#C9996B] text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
            Explore Articles
          </button>

          <button className="px-8 py-4 rounded-xl border border-[#5C766D]/20 text-[#5C766D] font-semibold hover:bg-white transition duration-300">
            Read Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;