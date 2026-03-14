import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] font-sans overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-light tracking-widest uppercase">
            Yaseen <span className="text-[#D4AF37] font-medium">Studio</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-white/70">
            <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="#expertise" className="hover:text-[#D4AF37] transition-colors">Expertise</a>
            <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract dark gradient / image layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=2070&q=80" 
            alt="Salon Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <h2 className="text-[#D4AF37] text-xs md:text-sm tracking-[0.3em] font-semibold uppercase mb-6 animate-pulse">Precision & Elegance</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-tight">
            Elevate Your <br /> <span className="font-serif italic text-white/90">Signature Style</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-10">
            Masterful hairstyling for those who demand excellence. Experience personalized grooming in an atmosphere of modern luxury.
          </p>
          <a href="#expertise" className="inline-block border border-[#D4AF37] text-[#D4AF37] px-8 py-4 uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]">
            Discover Our Craft
          </a>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 md:py-32 bg-[#050505] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-8">
              <h3 className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase">Our Expertise</h3>
              <h2 className="text-4xl md:text-5xl font-light leading-tight">Artistry in Every <span className="font-serif italic">Detail</span></h2>
              <p className="text-white/60 font-light leading-relaxed">
                At Yaseen Studio, we believe that your hair is the ultimate expression of your personal brand. 
                With years of dedicated artistry and a keen eye for contemporary trends, we provide more than just a haircut—we deliver a transformation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 relative">
                <div className="border-l border-[#D4AF37] pl-6 hover:border-white transition-colors duration-300">
                  <h4 className="text-lg font-medium tracking-wide mb-2 uppercase text-white/90">Precision Cuts</h4>
                  <p className="text-white/40 text-sm font-light leading-relaxed">Tailored styles that complement your facial structure and lifestyle.</p>
                </div>
                <div className="border-l border-[#D4AF37] pl-6 hover:border-white transition-colors duration-300">
                  <h4 className="text-lg font-medium tracking-wide mb-2 uppercase text-white/90">Color Alchemy</h4>
                  <p className="text-white/40 text-sm font-light leading-relaxed">Vibrant, multidimensional coloring using industry-leading products.</p>
                </div>
                <div className="border-l border-[#D4AF37] pl-6 hover:border-white transition-colors duration-300">
                  <h4 className="text-lg font-medium tracking-wide mb-2 uppercase text-white/90">Styling</h4>
                  <p className="text-white/40 text-sm font-light leading-relaxed">Flawless blowouts and elegant styling for your most important occasions.</p>
                </div>
                <div className="border-l border-[#D4AF37] pl-6 hover:border-white transition-colors duration-300">
                  <h4 className="text-lg font-medium tracking-wide mb-2 uppercase text-white/90">Grooming</h4>
                  <p className="text-white/40 text-sm font-light leading-relaxed">Refined beard trims and classic grooming for the modern gentleman.</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative group">
              <div className="aspect-[4/5] overflow-hidden rounded-sm relative shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1974&q=80" 
                  alt="Styling in progress" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#0a0a0a] border border-white/10 p-4 hidden md:flex items-center justify-center shadow-xl backdrop-blur-sm z-10 transition-transform duration-500 group-hover:-translate-y-4">
                <p className="text-center font-serif italic text-white/80 text-lg">"Perfection is our starting point."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h3 className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4">The Portfolio</h3>
            <h2 className="text-4xl md:text-5xl font-light">Signature <span className="font-serif italic">Looks</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-lg">
              <div className="absolute inset-0 bg-[#D4AF37]/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1974&auto=format&fit=crop" alt="Look 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-lg md:mt-12">
              <div className="absolute inset-0 bg-[#D4AF37]/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1976&q=80" alt="Look 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-lg">
              <div className="absolute inset-0 bg-[#D4AF37]/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <img src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop" alt="Look 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro/About snippet */}
      <section className="py-24 bg-[#050505] border-t border-white/5 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <svg className="w-12 h-12 mx-auto text-[#D4AF37] mb-8 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm5.656 5.656a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
          </svg>
          <h2 className="text-3xl md:text-4xl font-light mb-6">Yaseen's Philosophy</h2>
          <p className="text-white/60 font-light text-lg leading-relaxed">
            "Hairstyling is more than a service, it's a profound form of art. Each client that sits in my chair is treated as an individual masterpiece. We don't just cut hair; we sculpt confidence and craft your most authentic self."
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/5 text-center shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-light tracking-widest uppercase mb-6">
              Yaseen <span className="text-[#D4AF37] font-medium">Studio</span>
          </div>
          <p className="text-white/30 text-xs font-light uppercase tracking-widest">
            © {new Date().getFullYear()} Yaseen Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
