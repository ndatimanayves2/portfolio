const categories = [
  { icon: '💻', title: 'Frontend', items: ['React.js', 'Vue.js', 'JavaScript / TypeScript', 'HTML5 & CSS3'] },
  { icon: '🖥️', title: 'Backend', items: ['Node.js', 'Python', 'Express.js', 'RESTful APIs'] },
  { icon: '🗄️', title: 'Database', items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'] },
  { icon: '🛠️', title: 'Tools', items: ['Git & GitHub', 'Docker', 'AWS', 'CI/CD'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-indigo-400 font-medium">What I Know</span>
          <h2 className="text-4xl font-bold text-white mt-1">Technical Skills</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ icon, title, items }) => (
            <div key={title} className="bg-gray-900 rounded-2xl p-6 hover:border hover:border-indigo-500 transition-all">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-400">
                    <span className="text-indigo-400">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
