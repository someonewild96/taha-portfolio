import React, { useState } from 'react';
import { Github, Linkedin, Mail, Globe, Database, Server } from 'lucide-react';
import meImage from '../me.png';

export default function Interface() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="absolute inset-0 overflow-auto">
      <div className="sticky top-0 left-0 right-0 p-8 flex justify-between items-start bg-gradient-to-b from-black/50 to-transparent">
      <div className="text-white flex items-center gap-4">
          <img src={meImage} alt="Taha Khurram" className="w-16 h-16 rounded-full border-2 border-white/50" />
          <div>
            <h1 className="text-4xl font-bold mb-2">Taha Khurram</h1>
            <p className="text-xl opacity-70">Full Stack Developer</p>
          </div>
        </div>


        <div className="flex gap-4">
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@example.com" className="text-white hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center">
        {/* Spacer for 3D model visibility */}
      </div>

      <div className="bg-black/30 backdrop-blur-sm p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="E-Commerce Platform"
              description="Full-stack e-commerce solution built with .NET Core and React"
              icon={<Globe />}
              tags={['.NET', 'C#', 'SQL', 'React']}
            />
            <ProjectCard
              title="CMS System"
              description="Custom content management system using Laravel and Vue.js"
              icon={<Database />}
              tags={['PHP', 'Laravel', 'MySQL', 'Vue.js']}
            />
            <ProjectCard
              title="Network Monitoring Tool"
              description="Python-based network monitoring and analysis tool"
              icon={<Server />}
              tags={['Python', 'Networking', 'Linux']}
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-16 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['.NET', 'SQL', 'C#', 'PHP', 'Codeigniter', 'Laravel', 'Python', 'Networking', 'Linux'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-16 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-blue-500 focus:outline-none h-32"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-black/50 backdrop-blur-sm text-white py-8">
        <div className="max-w-4xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Taha Khurram</h3>
              <p className="opacity-70">Full Stack Developer specializing in web, mobile, and native development.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 opacity-70">
                <li><a href="#" className="hover:text-blue-400">Projects</a></li>
                <li><a href="#" className="hover:text-blue-400">Skills</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-blue-400"><Github size={20} /></a>
                <a href="#" className="hover:text-blue-400"><Linkedin size={20} /></a>
                <a href="mailto:contact@example.com" className="hover:text-blue-400"><Mail size={20} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center opacity-70">
            <p>&copy; {new Date().getFullYear()} Taha Khurram. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, icon, tags }) {
  return (
    <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
      <div className="text-white mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-white/10 rounded-full text-xs text-white">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}