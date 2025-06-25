
import React from 'react';
import { Skill } from '../contexts/ProfileContext';

interface SkillBarProps {
  skill: Skill;
  pixelMode: boolean;
}

export function SkillBar({ skill, pixelMode }: SkillBarProps) {
  return (
    <div className="mb-6 animate-fade-in">
      <div className="flex justify-between items-center mb-2">
        <span className={`text-white font-semibold ${pixelMode ? 'pixelated text-sm' : 'text-lg'}`}>
          {skill.name}
        </span>
        <span className={`text-blue-200 ${pixelMode ? 'pixelated text-xs' : 'text-sm'}`}>
          {skill.percentage}%
        </span>
      </div>
      <div className={`w-full bg-white/10 rounded-full h-3 backdrop-blur-sm border border-white/20 ${pixelMode ? 'pixelated' : ''}`}>
        <div
          className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden ${pixelMode ? 'pixelated' : ''}`}
          style={{ width: `${skill.percentage}%` }}
        >
          {!pixelMode && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          )}
        </div>
      </div>
    </div>
  );
}
