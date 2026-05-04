export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 flex items-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 w-full">
        <div className="flex-1 text-center md:text-left">
          <p className="text-indigo-400 font-medium mb-2">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">
            Ndatimana <span className="text-indigo-400">Yves</span>
          </h1>
          <h2 className="text-2xl text-gray-300 mb-4">Fullstack Developer</h2>
          <p className="text-gray-400 mb-8 max-w-md">Building modern, scalable web applications with cutting-edge technologies.</p>
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <button onClick={() => scrollTo('projects')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              View My Work
            </button>
            <button onClick={() => scrollTo('contact')} className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Hire Me
            </button>
          </div>
          <div className="flex gap-5 mt-8 justify-center md:justify-start text-2xl">
            <a href="https://github.com/ndatimanayves" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">⌨</a>
            <a href="https://linkedin.com/in/ndatimanayves" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">in</a>
            <a href="mailto:ndatimanayves@example.com" className="text-gray-400 hover:text-indigo-400 transition-colors">✉</a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
              <img
                src="https://ui-avatars.com/api/?name=Ndatimana+Yves&size=400&background=667eea&color=fff&bold=true"
                alt="Ndatimana Yves"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-400 rounded-full animate-bounce" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
