
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Github } from 'lucide-react';
import { SocialMedia } from '../contexts/ProfileContext';

interface SocialMediaIconProps {
  socialMedia: SocialMedia;
  size?: number;
  pixelMode?: boolean;
}

const iconMap = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
  github: Github,
};

export function SocialMediaIcon({ socialMedia, size = 24, pixelMode = false }: SocialMediaIconProps) {
  const Icon = iconMap[socialMedia.icon as keyof typeof iconMap];
  
  if (!Icon) return null;

  return (
    <a
      href={socialMedia.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-full hover:from-purple-500/40 hover:to-blue-500/40 transition-all duration-300 transform hover:scale-110 hover:rotate-6 border border-white/20 shadow-2xl hover:shadow-purple-500/25 group ${pixelMode ? 'pixelated' : ''}`}
      title={socialMedia.name}
    >
      <Icon 
        size={size} 
        className="text-white drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300" 
      />
      {!pixelMode && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
    </a>
  );
}
