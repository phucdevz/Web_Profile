
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../contexts/ProfileContext';

interface ProjectCardProps {
  project: Project;
  pixelMode: boolean;
}

export function ProjectCard({ project, pixelMode }: ProjectCardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 group ${pixelMode ? 'pixelated' : ''}`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${pixelMode ? 'pixelated' : ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className={`text-xl font-bold text-white mb-3 ${pixelMode ? 'pixelated' : ''}`}>
          {project.title}
        </h3>
        <p className={`text-blue-200 mb-4 leading-relaxed ${pixelMode ? 'pixelated text-sm' : ''}`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-xs text-white border border-white/20 ${pixelMode ? 'pixelated' : ''}`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 ${pixelMode ? 'pixelated' : ''}`}
        >
          <span>Xem dự án</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
