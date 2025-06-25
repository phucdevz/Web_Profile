# 🌟 Mini Profile Site - Portfolio Cá Nhân

Một ứng dụng portfolio cá nhân hiện đại và đẹp mắt được xây dựng với React, TypeScript và Tailwind CSS. Ứng dụng có giao diện admin để quản lý nội dung và nhiều theme background động.

![Demo](https://img.shields.io/badge/Demo-Live%20Preview-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.11-06B6D4?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?style=for-the-badge&logo=vite)

## ✨ Tính Năng Nổi Bật

### 🎨 Giao Diện Người Dùng
- **Responsive Design**: Tương thích hoàn hảo trên mọi thiết bị
- **Background Themes**: 5 theme động với hiệu ứng vũ trụ, đại dương, hoàng hôn, rừng và thiên hà
- **Pixel Mode**: Chế độ đồ họa pixel độc đáo
- **Animations**: Hiệu ứng chuyển động mượt mà và bắt mắt
- **Dark Theme**: Thiết kế tối với gradient màu sắc đẹp mắt

### 🔧 Giao Diện Admin
- **Dashboard Quản Lý**: Giao diện admin thân thiện để chỉnh sửa nội dung
- **Quản Lý Profile**: Cập nhật thông tin cá nhân, avatar, bio
- **Quản Lý Skills**: Thêm/sửa/xóa kỹ năng với thanh progress bar
- **Quản Lý Projects**: Quản lý danh sách dự án với hình ảnh và mô tả
- **Quản Lý Social Media**: Cấu hình các liên kết mạng xã hội
- **Theme Switcher**: Chuyển đổi giữa các background theme
- **Bảo Mật**: Hệ thống đăng nhập admin với mật khẩu

### 🚀 Tính Năng Kỹ Thuật
- **Local Storage**: Lưu trữ dữ liệu locally
- **Context API**: Quản lý state toàn cục
- **React Router**: Điều hướng trang
- **Toast Notifications**: Thông báo phản hồi người dùng
- **Form Validation**: Xác thực dữ liệu đầu vào

## 🛠️ Công Nghệ Sử Dụng

### Frontend
- **React 18.3.1** - Thư viện UI
- **TypeScript 5.5.3** - Ngôn ngữ lập trình type-safe
- **Vite 5.4.1** - Build tool và dev server
- **Tailwind CSS 3.4.11** - Framework CSS utility-first
- **shadcn/ui** - Component library đẹp mắt

### UI Components & Libraries
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **React Router DOM** - Client-side routing
- **TanStack Query** - Data fetching
- **Sonner** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📦 Cài Đặt và Chạy

### Yêu Cầu Hệ Thống
- Node.js (version 16 trở lên)
- npm hoặc yarn

### Bước 1: Clone Repository
```bash
git clone <your-repository-url>
cd mini-profile-site-main
```

### Bước 2: Cài Đặt Dependencies
```bash
npm install
# hoặc
yarn install
```

### Bước 3: Chạy Development Server
```bash
npm run dev
# hoặc
yarn dev
```

Ứng dụng sẽ chạy tại: `http://localhost:8080`

### Bước 4: Build Production
```bash
npm run build
# hoặc
yarn build
```

## 🎯 Cấu Trúc Dự Án

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── ProfilePage.tsx # Trang chính hiển thị profile
│   ├── AdminDashboard.tsx # Giao diện admin
│   ├── AdminLogin.tsx  # Trang đăng nhập admin
│   ├── BackgroundTheme.tsx # Quản lý background themes
│   ├── ProjectCard.tsx # Component hiển thị project
│   ├── SkillBar.tsx    # Component thanh kỹ năng
│   └── SocialMediaIcon.tsx # Icon mạng xã hội
├── contexts/           # React Context
│   └── ProfileContext.tsx # Quản lý state profile
├── hooks/              # Custom hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx           # Entry point
```

## 🔐 Truy Cập Admin Panel

1. Truy cập trang chủ: `http://localhost:8080`
2. Click vào icon Settings (⚙️) ở góc trên bên phải
3. Nhập mật khẩu: `admin123`
4. Bạn sẽ được chuyển đến Admin Dashboard

## 🎨 Customization

### Thay Đổi Theme Background
Trong Admin Dashboard, bạn có thể chọn 1 trong 5 theme:
- **Cosmic Purple**: Chủ đề vũ trụ tím
- **Ocean Depths**: Chủ đề đại dương sâu
- **Sunset Glow**: Chủ đề hoàng hôn
- **Forest Night**: Chủ đề rừng đêm
- **Galaxy Storm**: Chủ đề bão thiên hà

### Thêm Kỹ Năng Mới
1. Vào Admin Dashboard → Skills
2. Click "Thêm Kỹ Năng"
3. Điền tên, phần trăm và chọn màu
4. Click "Lưu"

### Thêm Dự Án Mới
1. Vào Admin Dashboard → Projects
2. Click "Thêm Dự Án"
3. Điền thông tin dự án
4. Upload hình ảnh hoặc nhập URL
5. Click "Lưu"

## 🌟 Tính Năng Đặc Biệt

### Pixel Mode
- Bật/tắt chế độ đồ họa pixel trong Admin Dashboard
- Tạo hiệu ứng retro độc đáo cho toàn bộ giao diện

### Animated Elements
- Hiệu ứng ping cho avatar
- Animation cho các skill bars
- Hover effects cho social media icons
- Shooting stars và nebula effects

### Responsive Design
- Mobile-first approach
- Grid layout linh hoạt
- Typography responsive
- Touch-friendly interactions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## 🤝 Đóng Góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License. Xem file `LICENSE` để biết thêm chi tiết.

## 👨‍💻 Tác Giả

**phucdez** - [GitHub](https://github.com/phucdevz)

---

⭐ Nếu dự án này hữu ích, hãy cho tôi một star trên GitHub!
