import React, { useState } from 'react';
import { useProfile } from '../contexts/ProfileContext';
import { User, Share2, LogOut, Save, Palette, Code, Monitor, FolderOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { SocialMedia, Skill, Project } from '../contexts/ProfileContext';
import { themes } from './BackgroundTheme';

export function AdminDashboard() {
  const { profileData, updateProfile, updateSocialMedia, updateSkills, updateProjects, updateTheme, togglePixelMode, logout } = useProfile();
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    name: profileData.name,
    bio: profileData.bio,
    avatar: profileData.avatar
  });
  const [socialMediaData, setSocialMediaData] = useState(profileData.socialMedia);
  const [skillsData, setSkillsData] = useState(profileData.skills);
  const [projectsData, setProjectsData] = useState(profileData.projects);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Đăng xuất thành công",
      description: "Hẹn gặp lại bạn!",
    });
    navigate('/');
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    toast({
      title: "Cập nhật thành công!",
      description: "Thông tin cá nhân đã được lưu.",
    });
  };

  const handleSocialMediaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSocialMedia(socialMediaData);
    toast({
      title: "Cập nhật thành công!",
      description: "Cài đặt mạng xã hội đã được lưu.",
    });
  };

  const handleSkillsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSkills(skillsData);
    toast({
      title: "Cập nhật thành công!",
      description: "Kỹ năng đã được lưu.",
    });
  };

  const handleProjectsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProjects(projectsData);
    toast({
      title: "Cập nhật thành công!",
      description: "Dự án đã được lưu.",
    });
  };

  const handleThemeChange = (themeId: string) => {
    updateTheme(themeId);
    toast({
      title: "Đã thay đổi theme!",
      description: "Background đã được cập nhật.",
    });
  };

  const handlePixelModeToggle = () => {
    togglePixelMode();
    toast({
      title: "Đã thay đổi chế độ đồ họa!",
      description: profileData.pixelMode ? "Chế độ bình thường" : "Chế độ pixel",
    });
  };

  const updateSocialMediaItem = (id: string, updates: Partial<SocialMedia>) => {
    setSocialMediaData(prev => 
      prev.map(item => 
        item.id === id ? { ...item, ...updates } : item
      )
    );
  };

  const updateSkillItem = (id: string, updates: Partial<Skill>) => {
    setSkillsData(prev => 
      prev.map(item => 
        item.id === id ? { ...item, ...updates } : item
      )
    );
  };

  const updateProjectItem = (id: string, updates: Partial<Project>) => {
    setProjectsData(prev => 
      prev.map(item => 
        item.id === id ? { ...item, ...updates } : item
      )
    );
  };

  const addNewSkill = () => {
    const newSkill: Skill = {
      id: `skill_${Date.now()}`,
      name: "Kỹ năng mới",
      percentage: 50,
      color: "from-gray-400 to-gray-600"
    };
    setSkillsData(prev => [...prev, newSkill]);
  };

  const addNewProject = () => {
    const newProject: Project = {
      id: `project_${Date.now()}`,
      title: "Dự án mới",
      description: "Mô tả dự án...",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      projectUrl: "https://example.com",
      technologies: ["React"],
      enabled: true
    };
    setProjectsData(prev => [...prev, newProject]);
  };

  const removeSkill = (id: string) => {
    setSkillsData(prev => prev.filter(skill => skill.id !== id));
  };

  const removeProject = (id: string) => {
    setProjectsData(prev => prev.filter(project => project.id !== id));
  };

  const colorOptions = [
    { value: "from-yellow-400 to-yellow-600", label: "Yellow", preview: "bg-gradient-to-r from-yellow-400 to-yellow-600" },
    { value: "from-orange-400 to-orange-600", label: "Orange", preview: "bg-gradient-to-r from-orange-400 to-orange-600" },
    { value: "from-blue-400 to-blue-600", label: "Blue", preview: "bg-gradient-to-r from-blue-400 to-blue-600" },
    { value: "from-cyan-400 to-cyan-600", label: "Cyan", preview: "bg-gradient-to-r from-cyan-400 to-cyan-600" },
    { value: "from-green-400 to-green-600", label: "Green", preview: "bg-gradient-to-r from-green-400 to-green-600" },
    { value: "from-purple-400 to-purple-600", label: "Purple", preview: "bg-gradient-to-r from-purple-400 to-purple-600" },
    { value: "from-pink-400 to-pink-600", label: "Pink", preview: "bg-gradient-to-r from-pink-400 to-pink-600" },
    { value: "from-red-400 to-red-600", label: "Red", preview: "bg-gradient-to-r from-red-400 to-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold text-white hover:text-blue-200 transition-colors duration-300">
                Admin Panel
              </Link>
              {/* Custom verified badge for Admin Panel */}
              <div className="relative">
                <img 
                  src="https://img.icons8.com/glyph-neue/64/228BE6/verified-account.png" 
                  alt="Verified Admin" 
                  className="w-6 h-6 animate-pulse drop-shadow-lg" 
                />
                <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-sm animate-ping"></div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
              >
                Xem Profile
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 text-white hover:text-red-300 transition-colors duration-300"
                title="Đăng xuất"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === 'profile'
                      ? 'bg-purple-600 text-white'
                      : 'text-blue-200 hover:bg-white/10'
                  }`}
                >
                  <User size={20} />
                  <span>Personal Information</span>
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === 'skills'
                      ? 'bg-purple-600 text-white'
                      : 'text-blue-200 hover:bg-white/10'
                  }`}
                >
                  <Code size={20} />
                  <span>Skill</span>
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === 'projects'
                      ? 'bg-purple-600 text-white'
                      : 'text-blue-200 hover:bg-white/10'
                  }`}
                >
                  <FolderOpen size={20} />
                  <span>Project</span>
                </button>
                <button
                  onClick={() => setActiveTab('social')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === 'social'
                      ? 'bg-purple-600 text-white'
                      : 'text-blue-200 hover:bg-white/10'
                  }`}
                >
                  <Share2 size={20} />
                  <span>Social Network</span>
                </button>
                <button
                  onClick={() => setActiveTab('themes')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === 'themes'
                      ? 'bg-purple-600 text-white'
                      : 'text-blue-200 hover:bg-white/10'
                  }`}
                >
                  <Palette size={20} />
                  <span>Background Themes</span>
                </button>
                <button
                  onClick={() => setActiveTab('display')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === 'display'
                      ? 'bg-purple-600 text-white'
                      : 'text-blue-200 hover:bg-white/10'
                  }`}
                >
                  <Monitor size={20} />
                  <span>Show</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Chỉnh sửa thông tin cá nhân</h2>
                  <form onSubmit={handleProfileSubmit} className="space-y-6">
                    <div>
                      <label className="block text-blue-200 text-sm font-medium mb-2">
                        Tên hiển thị
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-blue-200 text-sm font-medium mb-2">
                        Tiểu sử
                      </label>
                      <textarea
                        value={formData.bio}
                        onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                        rows={5}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-blue-200 text-sm font-medium mb-2">
                        URL ảnh đại diện
                      </label>
                      <input
                        type="url"
                        value={formData.avatar}
                        onChange={(e) => setFormData(prev => ({ ...prev, avatar: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                        required
                      />
                      {formData.avatar && (
                        <div className="mt-4">
                          <img
                            src={formData.avatar}
                            alt="Preview"
                            className="w-24 h-24 rounded-full object-cover border-2 border-white/20"
                          />
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Save size={20} />
                      <span>Lưu thay đổi</span>
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'skills' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Quản lý kỹ năng lập trình</h2>
                  <form onSubmit={handleSkillsSubmit} className="space-y-6">
                    {skillsData.map((skill) => (
                      <div key={skill.id} className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-white">Kỹ năng</h3>
                          <button
                            type="button"
                            onClick={() => removeSkill(skill.id)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            Xóa
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-blue-200 text-sm font-medium mb-2">
                              Tên kỹ năng
                            </label>
                            <input
                              type="text"
                              value={skill.name}
                              onChange={(e) => updateSkillItem(skill.id, { name: e.target.value })}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                              placeholder="Ví dụ: JavaScript"
                            />
                          </div>
                          <div>
                            <label className="block text-blue-200 text-sm font-medium mb-2">
                              Phần trăm ({skill.percentage}%)
                            </label>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={skill.percentage}
                              onChange={(e) => updateSkillItem(skill.id, { percentage: parseInt(e.target.value) })}
                              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                            />
                          </div>
                          <div>
                            <label className="block text-blue-200 text-sm font-medium mb-2">
                              Màu sắc
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                              {colorOptions.map((color) => (
                                <button
                                  key={color.value}
                                  type="button"
                                  onClick={() => updateSkillItem(skill.id, { color: color.value })}
                                  className={`w-8 h-8 rounded-full ${color.preview} border-2 ${
                                    skill.color === color.value ? 'border-white' : 'border-transparent'
                                  } hover:border-white/50 transition-all duration-200`}
                                  title={color.label}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={addNewSkill}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                      >
                        Thêm kỹ năng mới
                      </button>
                      <button
                        type="submit"
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <Save size={20} />
                        <span>Lưu kỹ năng</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'projects' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Quản lý dự án cá nhân</h2>
                  <form onSubmit={handleProjectsSubmit} className="space-y-6">
                    {projectsData.map((project) => (
                      <div key={project.id} className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-white">Dự án</h3>
                          <div className="flex items-center space-x-4">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={project.enabled}
                                onChange={(e) => updateProjectItem(project.id, { enabled: e.target.checked })}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                            </label>
                            <button
                              type="button"
                              onClick={() => removeProject(project.id)}
                              className="text-red-400 hover:text-red-300 transition-colors"
                            >
                              Xóa
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-blue-200 text-sm font-medium mb-2">
                              Tên dự án
                            </label>
                            <input
                              type="text"
                              value={project.title}
                              onChange={(e) => updateProjectItem(project.id, { title: e.target.value })}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                              placeholder="Ví dụ: Portfolio Website"
                            />
                          </div>
                          <div>
                            <label className="block text-blue-200 text-sm font-medium mb-2">
                              URL dự án
                            </label>
                            <input
                              type="url"
                              value={project.projectUrl}
                              onChange={(e) => updateProjectItem(project.id, { projectUrl: e.target.value })}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                              placeholder="https://example.com"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-blue-200 text-sm font-medium mb-2">
                              Mô tả dự án
                            </label>
                            <textarea
                              value={project.description}
                              onChange={(e) => updateProjectItem(project.id, { description: e.target.value })}
                              rows={3}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
                              placeholder="Mô tả ngắn gọn về dự án..."
                            />
                          </div>
                          <div>
                            <label className="block text-blue-200 text-sm font-medium mb-2">
                              URL hình ảnh
                            </label>
                            <input
                              type="url"
                              value={project.imageUrl}
                              onChange={(e) => updateProjectItem(project.id, { imageUrl: e.target.value })}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                              placeholder="https://example.com/image.jpg"
                            />
                          </div>
                          <div>
                            <label className="block text-blue-200 text-sm font-medium mb-2">
                              Công nghệ (phân cách bằng dấu phẩy)
                            </label>
                            <input
                              type="text"
                              value={project.technologies.join(', ')}
                              onChange={(e) => updateProjectItem(project.id, { technologies: e.target.value.split(',').map(t => t.trim()).filter(t => t) })}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                              placeholder="React, TypeScript, Tailwind CSS"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={addNewProject}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                      >
                        Thêm dự án mới
                      </button>
                      <button
                        type="submit"
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <Save size={20} />
                        <span>Lưu dự án</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'social' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Quản lý mạng xã hội</h2>
                  <form onSubmit={handleSocialMediaSubmit} className="space-y-6">
                    {socialMediaData.map((social) => (
                      <div key={social.id} className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-white capitalize">{social.name}</h3>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={social.enabled}
                              onChange={(e) => updateSocialMediaItem(social.id, { enabled: e.target.checked })}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                        <div>
                          <label className="block text-blue-200 text-sm font-medium mb-2">
                            URL
                          </label>
                          <input
                            type="url"
                            value={social.url}
                            onChange={(e) => updateSocialMediaItem(social.id, { url: e.target.value })}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                            placeholder={`Nhập link ${social.name} của bạn`}
                          />
                        </div>
                      </div>
                    ))}

                    <button
                      type="submit"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Save size={20} />
                      <span>Lưu cài đặt</span>
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'themes' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Chọn Background Theme</h2>
                  <p className="text-blue-200 mb-8">Chọn một trong 5 chủ đề background cho trang profile của bạn:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {themes.map((theme) => (
                      <div 
                        key={theme.id}
                        className={`relative group cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                          profileData.backgroundTheme === theme.id 
                            ? 'border-purple-400 shadow-lg shadow-purple-500/25' 
                            : 'border-white/20 hover:border-white/40'
                        }`}
                        onClick={() => handleThemeChange(theme.id)}
                      >
                        {/* Theme preview */}
                        <div className={`h-32 ${theme.preview} relative`}>
                          {/* Mini stars effect */}
                          <div className="absolute inset-0">
                            {[...Array(20)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
                                style={{
                                  left: `${Math.random() * 100}%`,
                                  top: `${Math.random() * 100}%`,
                                  animationDelay: `${Math.random() * 2}s`
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Theme info */}
                        <div className="p-4 bg-white/10 backdrop-blur-sm">
                          <h3 className="text-white font-semibold text-lg mb-2">{theme.name}</h3>
                          {profileData.backgroundTheme === theme.id && (
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-green-300 text-sm">Đang sử dụng</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'display' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Cài đặt hiển thị</h2>
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Chế độ Pixel Art</h3>
                          <p className="text-blue-200 text-sm">
                            Bật chế độ này để hiển thị trang profile theo phong cách pixel art retro
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={profileData.pixelMode}
                            onChange={handlePixelModeToggle}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
