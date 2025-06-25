
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface SocialMedia {
  id: string;
  name: string;
  icon: string;
  url: string;
  enabled: boolean;
}

export interface Skill {
  id: string;
  name: string;
  percentage: number;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: string[];
  enabled: boolean;
}

export interface ProfileData {
  name: string;
  bio: string;
  avatar: string;
  socialMedia: SocialMedia[];
  backgroundTheme: string;
  skills: Skill[];
  projects: Project[];
  pixelMode: boolean;
}

interface ProfileContextType {
  profileData: ProfileData;
  updateProfile: (data: Partial<ProfileData>) => void;
  updateSocialMedia: (socialMedia: SocialMedia[]) => void;
  updateSkills: (skills: Skill[]) => void;
  updateProjects: (projects: Project[]) => void;
  updateTheme: (themeId: string) => void;
  togglePixelMode: () => void;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const defaultProfileData: ProfileData = {
  name: "phucdez",
  bio: "Tôi là một developer đam mê công nghệ, yêu thích tạo ra những sản phẩm có ý nghĩa. Với kinh nghiệm trong phát triển web và mobile, tôi luôn tìm kiếm những thách thức mới để phát triển bản thân.",
  avatar: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3Rldnowd256YnNlb3hmaHlnY2t1M3BmbHVuOGRhajlhc3ZiYjhhdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7JqCZCuwEYdry/giphy.gif",
  backgroundTheme: 'cosmic',
  pixelMode: false,
  skills: [
    {
      id: "javascript",
      name: "JavaScript",
      percentage: 98,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: "html",
      name: "HTML",
      percentage: 100,
      color: "from-orange-400 to-orange-600"
    },
    {
      id: "css",
      name: "CSS",
      percentage: 95,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: "react",
      name: "React",
      percentage: 92,
      color: "from-cyan-400 to-cyan-600"
    },
    {
      id: "typescript",
      name: "TypeScript",
      percentage: 88,
      color: "from-blue-500 to-blue-700"
    },
    {
      id: "nodejs",
      name: "Node.js",
      percentage: 85,
      color: "from-green-400 to-green-600"
    }
  ],
  projects: [
    {
      id: "project1",
      title: "Portfolio Website",
      description: "Trang web portfolio cá nhân được xây dựng bằng React và Tailwind CSS",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      projectUrl: "https://example.com/portfolio",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      enabled: true
    },
    {
      id: "project2",
      title: "E-commerce App",
      description: "Ứng dụng thương mại điện tử với đầy đủ tính năng mua sắm online",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      projectUrl: "https://example.com/ecommerce",
      technologies: ["Next.js", "MongoDB", "Stripe"],
      enabled: true
    }
  ],
  socialMedia: [
    {
      id: "facebook",
      name: "Facebook",
      icon: "facebook",
      url: "https://facebook.com/yourprofile",
      enabled: true
    },
    {
      id: "instagram",
      name: "Instagram", 
      icon: "instagram",
      url: "https://instagram.com/yourprofile",
      enabled: true
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: "linkedin", 
      url: "https://linkedin.com/in/yourprofile",
      enabled: true
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/yourprofile",
      enabled: false
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: "youtube",
      url: "https://youtube.com/@yourprofile",
      enabled: false
    },
    {
      id: "github",
      name: "GitHub",
      icon: "github",
      url: "https://github.com/yourprofile",
      enabled: true
    }
  ]
};

const ADMIN_PASSWORD = "admin123"; // Trong thực tế nên mã hóa và lưu an toàn hơn

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profileData, setProfileData] = useState<ProfileData>(defaultProfileData);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Load profile data từ localStorage
    const savedProfile = localStorage.getItem('profileData');
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile);
        // Ensure backward compatibility
        if (!parsed.backgroundTheme) {
          parsed.backgroundTheme = 'cosmic';
        }
        if (!parsed.skills) {
          parsed.skills = defaultProfileData.skills;
        }
        if (!parsed.projects) {
          parsed.projects = defaultProfileData.projects;
        }
        if (parsed.pixelMode === undefined) {
          parsed.pixelMode = false;
        }
        // Add GitHub if not present
        if (!parsed.socialMedia.find((sm: SocialMedia) => sm.id === 'github')) {
          parsed.socialMedia.push({
            id: "github",
            name: "GitHub",
            icon: "github",
            url: "https://github.com/yourprofile",
            enabled: true
          });
        }
        setProfileData(parsed);
      } catch (error) {
        console.error('Error loading profile data:', error);
      }
    }

    // Kiểm tra authentication status
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const updateProfile = (data: Partial<ProfileData>) => {
    const newProfileData = { ...profileData, ...data };
    setProfileData(newProfileData);
    localStorage.setItem('profileData', JSON.stringify(newProfileData));
  };

  const updateSocialMedia = (socialMedia: SocialMedia[]) => {
    const newProfileData = { ...profileData, socialMedia };
    setProfileData(newProfileData);
    localStorage.setItem('profileData', JSON.stringify(newProfileData));
  };

  const updateSkills = (skills: Skill[]) => {
    const newProfileData = { ...profileData, skills };
    setProfileData(newProfileData);
    localStorage.setItem('profileData', JSON.stringify(newProfileData));
  };

  const updateProjects = (projects: Project[]) => {
    const newProfileData = { ...profileData, projects };
    setProfileData(newProfileData);
    localStorage.setItem('profileData', JSON.stringify(newProfileData));
  };

  const updateTheme = (themeId: string) => {
    const newProfileData = { ...profileData, backgroundTheme: themeId };
    setProfileData(newProfileData);
    localStorage.setItem('profileData', JSON.stringify(newProfileData));
  };

  const togglePixelMode = () => {
    const newProfileData = { ...profileData, pixelMode: !profileData.pixelMode };
    setProfileData(newProfileData);
    localStorage.setItem('profileData', JSON.stringify(newProfileData));
  };

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <ProfileContext.Provider value={{
      profileData,
      updateProfile,
      updateSocialMedia,
      updateSkills,
      updateProjects,
      updateTheme,
      togglePixelMode,
      isAuthenticated,
      login,
      logout
    }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
