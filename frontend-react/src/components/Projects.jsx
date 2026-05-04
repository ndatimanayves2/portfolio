import { useEffect, useState } from 'react';

const fallback = [
  { title: 'E-Commerce Platform', description: 'Full-stack e-commerce solution with React and Node.js.', technologies: ['React', 'Node.js', 'MongoDB'], github: '#', demo: '#' },
  { title: 'Task Management App', description: 'Real-time task management with user authentication.', technologies: ['Vue.js', 'Express.js', 'PostgreSQL'], github: '#', demo: '#' },
  { title: 'API Gateway Service', description: 'Microservices API gateway with rate limiting.', technologies: ['Python', 'FastAPI', 'Redis'], github: '#', demo: '#' },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(r => r.json())
      .then(data => setProjects(Array.isArray(data) ? data : fallback))
      .catch(() => setProjects(fallback));
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-indigo-400 font-medium">My Work</span>
          <h2 className="text-4xl font-bold text-white mt-1">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-900 rounded-2xl p-6 flex flex-col hover:shadow-lg hover:shadow-indigo-500/10 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-gray-400 flex-1 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.technologies?.map(t => (
                  <span key={t} className="bg-indigo-600/20 text-indigo-300 text-xs px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <div className="flex gap-4">
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">GitHub →</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">Live Demo →</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
