
import React from 'react';

export interface ThemeConfig {
  id: string;
  name: string;
  preview: string;
  gradients: string[];
  effects: {
    nebula: Array<{
      position: string;
      size: string;
      color: string;
      delay: string;
    }>;
    spirals: Array<{
      size: string;
      border: string;
      duration: string;
      direction?: string;
    }>;
  };
}

export const themes: ThemeConfig[] = [
  {
    id: 'cosmic',
    name: 'Cosmic Purple',
    preview: 'bg-gradient-to-br from-purple-900 via-blue-900 to-black',
    gradients: [
      'bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-black',
      'bg-gradient-to-tr from-indigo-900/40 via-transparent to-purple-800/30'
    ],
    effects: {
      nebula: [
        { position: 'top-0 left-0', size: 'w-96 h-96', color: 'bg-purple-500/20', delay: 'animation-delay-1000' },
        { position: 'top-1/3 right-0', size: 'w-80 h-80', color: 'bg-blue-400/20', delay: 'animation-delay-2000' },
        { position: 'bottom-0 left-1/3', size: 'w-72 h-72', color: 'bg-pink-400/20', delay: 'animation-delay-3000' }
      ],
      spirals: [
        { size: 'w-full h-full max-w-4xl max-h-4xl', border: 'border-purple-500/10', duration: '60s' },
        { size: 'w-3/4 h-3/4', border: 'border-blue-400/10', duration: '45s', direction: 'reverse' },
        { size: 'w-1/2 h-1/2', border: 'border-pink-400/10', duration: '30s' }
      ]
    }
  },
  {
    id: 'ocean',
    name: 'Ocean Depths',
    preview: 'bg-gradient-to-br from-blue-900 via-teal-900 to-black',
    gradients: [
      'bg-gradient-to-br from-blue-900/50 via-teal-900/30 to-black',
      'bg-gradient-to-tr from-cyan-900/40 via-transparent to-blue-800/30'
    ],
    effects: {
      nebula: [
        { position: 'top-0 left-0', size: 'w-96 h-96', color: 'bg-cyan-500/20', delay: 'animation-delay-1000' },
        { position: 'top-1/3 right-0', size: 'w-80 h-80', color: 'bg-teal-400/20', delay: 'animation-delay-2000' },
        { position: 'bottom-0 left-1/3', size: 'w-72 h-72', color: 'bg-blue-400/20', delay: 'animation-delay-3000' }
      ],
      spirals: [
        { size: 'w-full h-full max-w-4xl max-h-4xl', border: 'border-cyan-500/10', duration: '60s' },
        { size: 'w-3/4 h-3/4', border: 'border-teal-400/10', duration: '45s', direction: 'reverse' },
        { size: 'w-1/2 h-1/2', border: 'border-blue-400/10', duration: '30s' }
      ]
    }
  },
  {
    id: 'sunset',
    name: 'Sunset Glow',
    preview: 'bg-gradient-to-br from-orange-900 via-red-900 to-black',
    gradients: [
      'bg-gradient-to-br from-orange-900/50 via-red-900/30 to-black',
      'bg-gradient-to-tr from-yellow-900/40 via-transparent to-orange-800/30'
    ],
    effects: {
      nebula: [
        { position: 'top-0 left-0', size: 'w-96 h-96', color: 'bg-orange-500/20', delay: 'animation-delay-1000' },
        { position: 'top-1/3 right-0', size: 'w-80 h-80', color: 'bg-red-400/20', delay: 'animation-delay-2000' },
        { position: 'bottom-0 left-1/3', size: 'w-72 h-72', color: 'bg-yellow-400/20', delay: 'animation-delay-3000' }
      ],
      spirals: [
        { size: 'w-full h-full max-w-4xl max-h-4xl', border: 'border-orange-500/10', duration: '60s' },
        { size: 'w-3/4 h-3/4', border: 'border-red-400/10', duration: '45s', direction: 'reverse' },
        { size: 'w-1/2 h-1/2', border: 'border-yellow-400/10', duration: '30s' }
      ]
    }
  },
  {
    id: 'forest',
    name: 'Forest Night',
    preview: 'bg-gradient-to-br from-green-900 via-emerald-900 to-black',
    gradients: [
      'bg-gradient-to-br from-green-900/50 via-emerald-900/30 to-black',
      'bg-gradient-to-tr from-lime-900/40 via-transparent to-green-800/30'
    ],
    effects: {
      nebula: [
        { position: 'top-0 left-0', size: 'w-96 h-96', color: 'bg-green-500/20', delay: 'animation-delay-1000' },
        { position: 'top-1/3 right-0', size: 'w-80 h-80', color: 'bg-emerald-400/20', delay: 'animation-delay-2000' },
        { position: 'bottom-0 left-1/3', size: 'w-72 h-72', color: 'bg-lime-400/20', delay: 'animation-delay-3000' }
      ],
      spirals: [
        { size: 'w-full h-full max-w-4xl max-h-4xl', border: 'border-green-500/10', duration: '60s' },
        { size: 'w-3/4 h-3/4', border: 'border-emerald-400/10', duration: '45s', direction: 'reverse' },
        { size: 'w-1/2 h-1/2', border: 'border-lime-400/10', duration: '30s' }
      ]
    }
  },
  {
    id: 'galaxy',
    name: 'Galaxy Storm',
    preview: 'bg-gradient-to-br from-violet-900 via-fuchsia-900 to-black',
    gradients: [
      'bg-gradient-to-br from-violet-900/50 via-fuchsia-900/30 to-black',
      'bg-gradient-to-tr from-purple-900/40 via-transparent to-violet-800/30'
    ],
    effects: {
      nebula: [
        { position: 'top-0 left-0', size: 'w-96 h-96', color: 'bg-violet-500/20', delay: 'animation-delay-1000' },
        { position: 'top-1/3 right-0', size: 'w-80 h-80', color: 'bg-fuchsia-400/20', delay: 'animation-delay-2000' },
        { position: 'bottom-0 left-1/3', size: 'w-72 h-72', color: 'bg-purple-400/20', delay: 'animation-delay-3000' }
      ],
      spirals: [
        { size: 'w-full h-full max-w-4xl max-h-4xl', border: 'border-violet-500/10', duration: '60s' },
        { size: 'w-3/4 h-3/4', border: 'border-fuchsia-400/10', duration: '45s', direction: 'reverse' },
        { size: 'w-1/2 h-1/2', border: 'border-purple-400/10', duration: '30s' }
      ]
    }
  }
];

interface BackgroundThemeProps {
  theme: ThemeConfig;
}

export function BackgroundTheme({ theme }: BackgroundThemeProps) {
  return (
    <div className="absolute inset-0">
      {/* Dynamic gradients */}
      {theme.gradients.map((gradient, index) => (
        <div key={index} className={`absolute inset-0 ${gradient}`}></div>
      ))}
      
      {/* Animated stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-0.5 bg-gradient-to-r from-white to-transparent animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Dynamic nebula effects */}
      {theme.effects.nebula.map((nebula, index) => (
        <div 
          key={index}
          className={`absolute ${nebula.position} ${nebula.size} ${nebula.color} rounded-full mix-blend-screen filter blur-3xl animate-pulse ${nebula.delay}`}
        ></div>
      ))}
      
      {/* Dynamic galaxy spiral effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        {theme.effects.spirals.map((spiral, index) => (
          <div 
            key={index}
            className={`absolute ${spiral.size} rounded-full border ${spiral.border} animate-spin`}
            style={{ 
              animationDuration: spiral.duration,
              animationDirection: spiral.direction || 'normal'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
