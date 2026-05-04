import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-900 to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-indigo-300 font-medium">Say Hello</span>
          <h2 className="text-4xl font-bold text-white mt-1">Get In Touch</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { icon: '📍', label: 'Location', value: 'Kigali, Rwanda' },
              { icon: '✉️', label: 'Email', value: 'ndatimanayves@example.com' },
              { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/ndatimanayves' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-xl">{icon}</div>
                <div>
                  <h4 className="text-white font-medium">{label}</h4>
                  <p className="text-gray-300 text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text" placeholder="Your Name" required value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email" placeholder="Your Email" required value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              placeholder="Your Message" required rows={5} value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            />
            {status === 'success' && <p className="text-green-400 text-sm">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-400 text-sm">Error sending message. Try again.</p>}
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-colors">
              ✉ Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
