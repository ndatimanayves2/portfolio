import { useEffect, useState } from 'react';

const fallback = [
  { company: 'TechCorp Rwanda', role: 'Senior Fullstack Developer', description: 'Led development of enterprise web applications.', startDate: '2022-01', current: true, technologies: ['React', 'Node.js', 'AWS'] },
  { company: 'StartupHub Kigali', role: 'Fullstack Developer', description: 'Built multiple client projects from scratch.', startDate: '2020-03', endDate: '2021-12', current: false, technologies: ['Vue.js', 'MongoDB'] },
];

function fmt(d) {
  if (!d) return '';
  const [y, m] = d.split('-');
  return `${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][+m-1]} ${y}`;
}

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('/api/experiences')
      .then(r => r.json())
      .then(data => setExperiences(Array.isArray(data) ? data : fallback))
      .catch(() => setExperiences(fallback));
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-indigo-400 font-medium">My Journey</span>
          <h2 className="text-4xl font-bold text-white mt-1">Work Experience</h2>
        </div>
        <div className="space-y-6">
          {experiences.map((e, i) => (
            <div key={i} className="bg-gray-800 rounded-2xl p-6 border-l-4 border-indigo-500">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{e.role}</h3>
                  <span className="text-indigo-400">{e.company}</span>
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">
                  {fmt(e.startDate)} – {e.current ? 'Present' : fmt(e.endDate)}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{e.description}</p>
              <div className="flex flex-wrap gap-2">
                {e.technologies?.map(t => (
                  <span key={t} className="bg-indigo-600/20 text-indigo-300 text-xs px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
