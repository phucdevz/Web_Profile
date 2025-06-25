
import React from 'react';
import { useProfile } from '../contexts/ProfileContext';
import { SocialMediaIcon } from './SocialMediaIcon';
import { SkillBar } from './SkillBar';
import { ProjectCard } from './ProjectCard';
import { Settings, Pin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackgroundTheme, themes } from './BackgroundTheme';

export function ProfilePage() {
  const { profileData } = useProfile();
  
  // Find the current theme or fallback to cosmic
  const currentTheme = themes.find(theme => theme.id === profileData.backgroundTheme) || themes[0];

  return (
    <div className={`min-h-screen bg-black relative overflow-hidden ${profileData.pixelMode ? 'pixelated' : ''}`}>
      {/* Dynamic Background */}
      <BackgroundTheme theme={currentTheme} />

      {/* Ping Indicator */}
      <div className="fixed top-6 left-6 z-20">
        <div className="relative">
          <Pin 
            size={20} 
            className="text-emerald-400 drop-shadow-lg animate-pulse" 
          />
          <div className="absolute inset-0 bg-emerald-400/30 rounded-full blur-md animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
        </div>
      </div>

      {/* Admin Button */}
      <Link 
        to="/admin" 
        className="fixed top-6 right-6 p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-full hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 z-20 border border-white/10 shadow-2xl hover:shadow-purple-500/25"
        title="Admin Panel"
      >
        <Settings size={22} className="text-white drop-shadow-lg" />
      </Link>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="text-center max-w-6xl mx-auto">
          {/* Avatar with cosmic glow */}
          <div className="mb-12 relative">
            <div className="w-56 h-56 mx-auto rounded-full overflow-hidden relative">
              {/* Static border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <img
                    src={profileData.avatar}
                    alt={profileData.name}
                    className={`w-full h-full object-cover hover:scale-110 transition-transform duration-700 ${profileData.pixelMode ? 'pixelated' : ''}`}
                  />
                </div>
              </div>
              {/* Outer glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400/30 to-blue-400/30 blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Name with VIP badge */}
          <div className="mb-8 flex items-center justify-center gap-4 animate-fade-in">
            <h1 className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl ${profileData.pixelMode ? 'pixelated' : ''}`}>
              {profileData.name}
            </h1>
            {/* Custom animated verified badge */}
            <div className="relative">
              <img 
                src="https://img.icons8.com/glyph-neue/64/228BE6/verified-account.png" 
                alt="Verified" 
                className={`w-12 h-12 animate-pulse drop-shadow-lg ${profileData.pixelMode ? 'pixelated' : ''}`}
              />
              <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-md animate-ping"></div>
            </div>
          </div>

          {/* Bio with enhanced styling */}
          <div className="relative mb-16 animate-fade-in animation-delay-300">
            <p className={`text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl ${profileData.pixelMode ? 'pixelated' : ''}`}>
              {profileData.bio}
            </p>
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-purple-400/50 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-blue-400/50 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-pink-400/50 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-purple-400/50 rounded-br-lg"></div>
          </div>

          {/* Skills Section */}
          <div className="mb-16 animate-fade-in animation-delay-400">
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-8 ${profileData.pixelMode ? 'pixelated' : ''}`}>
              💻 Skill Programmer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {profileData.skills.map((skill, index) => (
                <div 
                  key={skill.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <SkillBar skill={skill} pixelMode={profileData.pixelMode} />
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          {profileData.projects.filter(project => project.enabled).length > 0 && (
            <div className="mb-16 animate-fade-in animation-delay-500">
              <h2 className={`text-3xl md:text-4xl font-bold text-white mb-8 ${profileData.pixelMode ? 'pixelated' : ''}`}>
                🚀 My Project
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {profileData.projects
                  .filter(project => project.enabled)
                  .map((project, index) => (
                    <div 
                      key={project.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <ProjectCard project={project} pixelMode={profileData.pixelMode} />
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Enhanced Social Media Icons */}
          <div className="flex justify-center flex-wrap gap-6 mb-16 animate-fade-in animation-delay-600">
            {profileData.socialMedia
              .filter(sm => sm.enabled)
              .map((sm, index) => (
                <div 
                  key={sm.id} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="relative group">
                    <SocialMediaIcon socialMedia={sm} size={32} pixelMode={profileData.pixelMode} />
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/0 to-blue-400/0 group-hover:from-purple-400/20 group-hover:to-blue-400/20 blur-xl transition-all duration-500"></div>
                  </div>
                </div>
              ))}
          </div>

          {/* Enhanced decorative elements */}
          <div className="flex justify-center space-x-8 animate-fade-in animation-delay-900">
            <div className="flex space-x-2">
              <div className={`w-3 h-3 bg-purple-400 rounded-full animate-bounce shadow-lg shadow-purple-400/50 ${profileData.pixelMode ? 'pixelated' : ''}`}></div>
              <div className={`w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-100 shadow-lg shadow-blue-400/50 ${profileData.pixelMode ? 'pixelated' : ''}`}></div>
              <div className={`w-3 h-3 bg-pink-400 rounded-full animate-bounce animation-delay-200 shadow-lg shadow-pink-400/50 ${profileData.pixelMode ? 'pixelated' : ''}`}></div>
            </div>
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            <div className="flex space-x-2">
              <div className={`w-2 h-2 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50 ${profileData.pixelMode ? 'pixelated' : ''}`}></div>
              <div className={`w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-300 shadow-lg shadow-green-400/50 ${profileData.pixelMode ? 'pixelated' : ''}`}></div>
              <div className={`w-2 h-2 bg-red-400 rounded-full animate-pulse animation-delay-600 shadow-lg shadow-red-400/50 ${profileData.pixelMode ? 'pixelated' : ''}`}></div>
            </div>
          </div>

          {/* Cosmic quote or tagline */}
          <div className="mt-16 animate-fade-in animation-delay-1200">
            <p className={`text-purple-200/70 text-sm italic font-light tracking-widest ${profileData.pixelMode ? 'pixelated' : ''}`}>
              ✨ Copyright @2025 https://github.com/phucdevz ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
