export default function About() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-indigo-400 font-medium">Who I Am</span>
          <h2 className="text-4xl font-bold text-white mt-1">About Me</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="relative flex-shrink-0">
            <img
              src="https://ui-avatars.com/api/?name=Ndatimana+Yves&size=400&background=667eea&color=fff&bold=true"
              alt="Ndatimana Yves"
              className="w-64 h-64 rounded-2xl object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white rounded-xl px-4 py-3 text-center shadow-lg">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-xs">Years Exp.</div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white mb-4">A passionate Fullstack Developer based in Kigali, Rwanda</h3>
            <p className="text-gray-400 mb-3">I'm Ndatimana Yves, a fullstack developer with expertise in both frontend and backend technologies. I create scalable, user-friendly applications that solve real-world problems.</p>
            <p className="text-gray-400 mb-6">I love turning complex problems into simple, beautiful and intuitive solutions.</p>
            <div className="flex gap-8 mb-8">
              {[['20+', 'Projects Done'], ['15+', 'Happy Clients'], ['5+', 'Years Exp.']].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-bold text-indigo-400">{num}</div>
                  <div className="text-gray-400 text-sm">{label}</div>
                </div>
              ))}
            </div>
            <button onClick={() => scrollTo('contact')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
